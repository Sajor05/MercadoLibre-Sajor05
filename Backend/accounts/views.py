from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

#R E G I S T E R  D E P E N D E C Y
from rest_framework.views import APIView
from rest_framework import status
from .serializers import UserRegistrationSerializer

"""""""""""""""""""""
-- R E G I S T E R --
"""""""""""""""""""""
class RegisterView(APIView):
    def post(self, request):
        serializer = UserRegistrationSerializer(data=request.data)
        if(serializer.is_valid):
            serializer.save()
            return (Response({"message" : "Usuario Registrado correctamente"}, status=status.HTTP_201_CREATED))
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

"""""""""""""""
-- L O G I N --
"""""""""""""""
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