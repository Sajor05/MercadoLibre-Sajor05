from rest_framework import serializers
from django.contrib.auth.models import User

class UserRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = User()
        fields = ["id", "email", "telefono", "nombre", "contraseña"]
        extra_kwargs = {
            "password" : {"write_only" : True}
        }

    def create(self, validated_data):
        user = User.objects.create_user(
            email = validated_data["email"],
            telefono = validated_data["telefono"],
            nombre = validated_data["nombre"],
            contraseña = validated_data["contraseña"]
        )
        
        return user