print("Welcome to our cinema :)\nChoose the movie of your choice\nMake payment and ensure to collect your sovenuir\nDo not forget to check your center name\n")

name = input("ENTER YOUR NAME: ")
name = name.upper()


cinema_details = {
    "SUGAR RUSH" : {
        "movie_time" : "2pm - 4pm",
        "movie_director" : "Sanni Uswat",
        "movie_center" : "Viva",
        "movie_souvenir" : "Popcorn and an orange juice",
        "movie_ticketamount" : "#2000"
        },

    "JUSTICE LEAGUE" : {
        "movie_time" : "9am - 12pm",
        "movie_director" : "Odeh Peter",
        "movie_center" : "Ace mall",
        "movie_souvenir" : "Meat pie with cold stone ice cream",
        "movie_ticketamount" : "#2500"
        },

    "THE UNHOLY" : {
        "movie_time" : "9pm - 1am",
        "movie_director" : "Olaniran Elijah",
        "movie_center" : "Ventura",
        "movie_souvenir" : "Biscuits, chicken pie and an apple juice",
        "movie_ticketamount" : "#3500"
        }
}
action1 = print("1. VIEW AVAILABLE MOVIES")


user = input("PRESS 1\n: ")
if user == "1":
    print(cinema_details)

print("\nThanks for patronizing us {}\n Enjoy your movie\n".format(name)) 

while True:
    movie_name = input("Enter Movie of your choice: ").upper()
    movie_title = [cinema_details[i] for i in cinema_details if i in movie_name]
    if len (movie_title) > 0:
        
        print(movie_title[0])
        print("CONGRATULATIONS {}, YOU HAVE SUCCESSFULLY REGISTERED FOR THE MOVIE".format(name)
              )
        payment = input("PAYMENT")
        print("MAKE PAYMENT") 
        break
    else:
        print("Not Available :(")

        
