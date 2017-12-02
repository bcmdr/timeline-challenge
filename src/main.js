let rawInput = `1457 First printed music volume
1740 Goldberg Variations
1791 The Magic Flute
1810 Fur Elise
1870 The Valkyrie
1875 Carmen
1877 Swan Lake
1903 the 1st Western (The Great Train Robbery)
1913 The birth of Hollywood
1922 Nosferatu
1925 Battleship Potemkin
1927 Metropolis
1928 Bolero
1935 Carmina Burana
1939 Gone With the Wind
1940 The Great Dictator
1946 The 1st Cannes Film Festival
1952 Singin' in the Rain
1954 Seven Samurai
1954 Godzilla
1955 Rebel Without a Cause
1955 The Night of the Hunter
1956 Love Me Tender
1957 The Bridge on the River Kwai
1957 Great Balls of Fire
1959 Ben-Hur
1960 Psycho
1963 The Great Escape
1964 Goldfinger
1965 Satisfaction
1966 The Good, The Bad and the Ugly
1967 Sgt. Pepper's Lonely Hearts Club Band
1967 What a Wonderful World
1968 Night of the Living Dead
1968 Mrs. Robinson
1968 2001: A Space Odyssey
1968 Planet of the Apes
1968 Born to Be Wild
1969 Easy Rider
1970 Get Up (I Fell Like Being a) Sex Machine
1971 Stairway to Heaven
1972 Smoke on the Water
1972 Way of the Dragon
1972 The Godfather
1972 The creation of the Ziggy Stardust character
1973 The Exorcist
1973 Candle in the Wind
1973 Knockin' on Heaven's Door
1973 The Dark Side of the Moon
1974 The Texas Chainsaw Massacre
1974 No Woman, No Cry
1975 Mamma Mia
1975 Monty Python and the Holy Grail
1975 Bohemian Rhapsody
1975 Jaws
1976 Taxi Driver
1976 Hotel California
1976 Rocky
1977 Saturday Night Fever
1977 Star Wars
1977 God Save the Queen
1978 Y.M.C.A.
1979 Message in a Bottle
1979 Alien
1979 Born to Be Alive
1979 Apocalypse Now
1980 Back in Black
1980 The Shining
1980 The Blues Brothers
1981 Raiders of the Lost Ark
1982 Thriller
1982 The Thing
1982 Rambo
1982 Conan the Barbarian
1982 Blade Runner
1982 E.T. the Extra-Terrestrial
1983 Scarface
1983 Gimme All Your Lovin'
1983 Sunday Bloody Sunday
1984 Like a Virgin
1984 Terminator
1984 Purple Rain
1984 Ghostbusters
1985 Back to the Future
1985 Money for Nothing
1986 The Final Countdown
1991 Black Album
1991 Nevermind
1992 Creep
1992 The Bodyguard
1994 Pulp Fiction
1995 California Love
1995 Seven
1996 Wannabe
1997 Titanic
1997 My Heart Will Go On
1998 Hunter
1998 The Big Lebowski
1998 Baby One More Time
1999 Matrix
2001 Origin of Symmetry
2001 One More Time
2003 The Return of the King
2005 Candy Shop
2007 Back in Black
2007 Don't Stop the Music
2008 Gran Torino
2009 Avatar
2009 Bad Romance
2009 Relapse`

class TimelineCard {
  constructor (cardString) {
    let input = cardString.split(' ')
    this.year = input[0]
    this.title = input.slice(1).join(' ')
  }
}

// Create array of cards from text input
let cardList = rawInput.split('\n').map(function(cardString) {
  return new TimelineCard(cardString)
})

Vue.component('card-list', {
  // TODO refactor card into child component of cardList
  template: '<ol><li v-for="card in cardList">{{ card.year }} — {{ card.title }}</li></ol>',
  data: function () {
    return {
      cardList: cardList
    }
  }
})

Vue.component('timeline-card', {
  
})

new Vue({
  el: "#main",
})
