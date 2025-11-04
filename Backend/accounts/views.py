from django.shortcuts import render, redirect
from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth.models import User
from django.db import IntegrityError

def signup(request):
    if(request.method == "GET"):
        return render(
            request,
            "ruta",
            {"form":UserCreationForm()})
    else:
        if request.POST["password1"]==request.POST["password2"]:
            try:
                user = User.objects.create_user(
                    username=request.POST["username"],
                    password=request.POST["password1"])
                user.save()
                login(request,user)
            except IntegrityError:
                return render(request, "misma ruta",{
                    "form" : UserCreationForm(),
                    "error" : "El usuario ya existe"
                })
    return render (request, "misma ruta",{
        "form" : UserCreationForm(),
        "error" : "Las contraseñas no coinciden"
    })

def signin(request):
    if request.method == "GET":
        return render(request,"account/signin.html",{
            "form":AuthenticationForm
        })
    #Revisa los datos que envia el usuario    
    else:
        user = authenticate(
                request,username=request.POST["username"], password=request.POST["password"]
        )
        if user is None:
            return render(request,"account/signin.html",{
                "form":AuthenticationForm,
                "error":"El usuario o la contraseña no coinciden"       
            })
        else:
            login(request,user)
            return redirect("home")
        
def closeSession(request):
    logout(request)
    return redirect("home")

def home(request):
    return render(request,"account/home.html")