def total_carrito(request):
    total = 0
    if request.user.is_authenticated:
        if "carrito" in request.session.keys():
            for key, value in request.session["carrito"].items():
                if "acumulado" not in value:
                    value["acumulado"] = value["precio"] * value["cantidad"]
                total += int(value["acumulado"])
    return {"total_carrito": total}