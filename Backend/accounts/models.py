from django.db import models

# Create your models here.
class Usuario(models.Model):
    email = models.CharField(max_length=320)
    telefono = models.CharField(max_length=10)
    nombre = models.CharField(max_length=20)
    constraseña = models.CharField(max_length=20)