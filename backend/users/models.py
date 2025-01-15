from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.base_user import BaseUserManager

from django_rest_passwordreset.signals import reset_password_token_created
from django.core.mail import EmailMultiAlternatives
from django.dispatch import receiver
from django.template.loader import render_to_string
from django.urls import reverse
from django.utils.html import strip_tags




# Custom user manager to handle user creation and superuser creation
class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('Email is a required Field')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)

        # Automatically set the username if it's not provided
        if not user.username:
            user.username = user.email  # Using email as username
        user.set_password(password)
        user.save(using=self._db)
        return user
    
    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(email, password, **extra_fields)

# Custom User model
class CustomUser(AbstractUser):
    email = models.EmailField(unique=True, max_length=200)
    birthday = models.DateField(null=True, blank=True)
    
    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []  # No other fields are required besides email and password




@receiver(reset_password_token_created)
def password_reset_token_created(reset_password_token, *args, **kwargs):
    sitelink = "http://localhost:8000/"
    token = "?token={}".format(reset_password_token.key)
    full_link = str(sitelink)+str("password-reset")+str(token)

    print(token)
    print(full_link)

    context ={
        'full_link' : full_link,
        'email_address' : reset_password_token.user.email
    }

    html_message = render_to_string("backend/email_template.html", context=context)
    plain_message = strip_tags(html_message)

    msg = EmailMultiAlternatives(
        subject="Request for {title}".format(title = reset_password_token.user.email),
        body = plain_message,
        from_email= 'sender@example.com',
        to = [reset_password_token.user.email],
        )
    msg.attach_alternative(html_message, "text/html")
    msg.send