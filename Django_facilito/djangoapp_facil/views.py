from django.shortcuts import render 
def home(request): 
    return render(request, "pagprincipal.html")
def cart(request): 
    return render(request, "cart.html")
def login(request): 
    return render(request, "login.html")
def login2(request): 
    return render(request, "login2.html")
def shipping(request): 
    return render(request, "shipping.html")
def sucursales(request): 
    return render(request, "sucursales.html")
def Logindjango(request): 
    return render(request, "logindjango.html")
def logout2(request): 
    return render(request, "logout.html")
# Create your views here.
