from bs4 import BeautifulSoup
import requests
import random


def get_imd_movies(url):
    page = requests.get(url)
    #print(page.text)
    soup = BeautifulSoup(page.text, 'html.parser')
    #print(soup)
    movies = soup.find_all("td", class_="titleColumn")
    #print(movies)
    random.shuffle(movies)
    return movies


def get_imd_summary(url):
    movie_page = requests.get(url)
    soup = BeautifulSoup(movie_page.text, 'html.parser')
    return soup.find("div", class_="summary_text").contents[0].strip()


def get_imd_movie_info(movie):
    movie_title = movie.a.contents[0]
    movie_year = movie.span.contents[0]
    movie_url = 'http://www.imdb.com' + movie.a['href']
    return movie_title, movie_year, movie_url


def imd_movie_picker():
    ctr = 0
    print("--------------------------------------------")
    for movie in get_imd_movies('http://www.imdb.com/chart/top'):
        movie_title, movie_year, movie_url = get_imd_movie_info(movie)
        movie_summary = get_imd_summary(movie_url)
        print(movie_title, movie_year)
        print(movie_summary)
        print("--------------------------------------------")
        ctr = ctr + 1
        if (ctr == 10):
            break;


imd_movie_picker()
