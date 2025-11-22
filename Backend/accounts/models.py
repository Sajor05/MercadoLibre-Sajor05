from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models

#---------------------------------------------------------
#-- Clase que maneja la creación de usuarios con Django --
#---------------------------------------------------------
class UserManager(BaseUserManager):
    def create_user(self, email:str, phoneNumber:str, username:str, password = None):
        email = self.normalize_email(email)
        user = self.model(email = email, phoneNumber = phoneNumber, username = username)
        user.set_password(password)
        user.save(using = self._db)
        
        return user
    
    def create_superuser(self, email, phoneNumber, username, password=None):
        user = self.create_user(email, phoneNumber, username, password)
        user.is_staff = True
        user.is_superuser = True
        user.is_active = True
        user.save(using=self._db)
        return user

# Create your models here.

#-----------------------------------------------------
#-- Clase que modela las tablas y datos del usuario --
#-----------------------------------------------------
class Profile(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(verbose_name = "email", max_length = 20, unique = True)
    phoneNumber = models.CharField(max_length=10)    
    username = models.CharField(max_length = 20, unique = True)
    
    is_active = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["phoneNumber", "username"]

    def __str__(self):
        return self.email