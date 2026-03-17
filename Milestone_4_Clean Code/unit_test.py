import pytest
from divide_num import divide_numbers


def test_divide_numbers_normal():
    assert divide_numbers(10, 2) == 5


def test_divide_numbers_zero():
    assert divide_numbers(10, 0) is None


def test_divide_numbers_invalid_input():
    assert divide_numbers("a", 2) is None


def test_divide_numbers_float():
    assert divide_numbers(7.5, 2.5) == 3