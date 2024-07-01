# djangoapp_facil/views.py

from django.shortcuts import render, redirect

from djangoapp_facil.tienda import Carrito
from .models import Producto

def home(request):
    productos = Producto.objects.all()
    context = {'productos': productos}
    return render(request, "pagprincipal.html", context)

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

def tienda(request):
    productos = Producto.objects.all()
    return render(request, "tienda.html", {'productos':productos})

def agregar_producto(request, producto_id):
    carrito = Carrito(request)
    producto = Producto.objects.get(id=producto_id)
    carrito.agregar(producto)
    return redirect("home")

def eliminar_producto(request, producto_id):
    carrito = Carrito(request)
    producto = Producto.objects.get(id=producto_id)
    carrito.eliminar(producto)
    return redirect("home")

def restar_producto(request, producto_id):
    carrito = Carrito(request)
    producto = Producto.objects.get(id=producto_id)
    carrito.restar(producto)
    return redirect("home")

def limpiar_carrito(request):
    carrito = Carrito(request)
    carrito.limpiar()
    return redirect("home")