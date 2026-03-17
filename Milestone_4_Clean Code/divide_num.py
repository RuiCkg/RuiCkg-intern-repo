def divide_numbers(a, b):
    if not isinstance(a, (int, float)) or not isinstance(b, (int, float)):
        return None

    if b == 0:
        return None

    return a / b