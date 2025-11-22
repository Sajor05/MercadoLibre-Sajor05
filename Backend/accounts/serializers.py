from rest_framework import serializers
from models import Profile

class UserRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ["id", "email", "phoneNumber", "username", "password"]
        extra_kwargs = {
            "password" : {"write_only" : True}
        }

    def create(self, validated_data):
        user = Profile.objects.create_user(
            email = validated_data["email"],
            phoneNumber = validated_data["phoneNumber"],
            username = validated_data["username"],
            password = validated_data["password"]
        )
        
        return user