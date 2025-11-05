from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

class TokenObtainPairSerializerClass(TokenObtainPairSerializer):
    def get_token(cls,user):
        token = super().get_token(user)
        token["username"] = user.username
        token["email"] = user.email
        return token

class TokenObtainPairViewClass(TokenObtainPairView):
    serializer_class = TokenObtainPairSerializerClass

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def user_profile(request):
    return Response({
        "message" : "Hola, estas autenticado",
        "user" : request.user.username
    })