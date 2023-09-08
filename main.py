def on_button_pressed_a():
    global morse_letter
    basic.clear_screen()
    morse_letter = "" + morse_letter + "."
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global morse_letter, lista_med_bokstäver
    if morse_letter == "":
        morse_letter = "" + morse_letter + " / "
        basic.clear_screen()
    else:
        lista_med_bokstäver = "" + lista_med_bokstäver + morse_letter + " "
        basic.show_string(lista_med_bokstäver)
        morse_letter = ""
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global morse_letter
    basic.clear_screen()
    morse_letter = "" + morse_letter + "-"
input.on_button_pressed(Button.B, on_button_pressed_b)

lista_med_bokstäver = ""
morse_letter = ""
radio.set_group(57)