

API 
- zmodyfikowałem minimalną długość odpowiedzi dla listy ofert i usunąłem autoryzacje
- interesujące ze dane dla listingu i detali oferty są takie same (taka sama struktura) - w takim wypadku mozna by skorzystac tylko z jednego requestu
- nie wiem czy to ograniczenia Prisma czy moja niewiedza (pierwszy raz uzywalem) ale w przypadku parametru status zawsze zwraca rozne statusy, dlatego tez dodale Array.filter w mapowaniu danych

Do zrobienia:
- testy
- dopracowanie intersection observer - obecnie gdy jest mało elementów i nie mozna scrollowac przez co nie dziala intersection observer
- w API listy ofert jest wiele parametrow do ktorych mozna by dodac sterowanie  i przetrzymywac te dane w URL w taki sposob aby strona pobierała dane podstawie parametrow
- stylowanie ;) 
- ograniczenie liczby renderów (choć uzycie hookow niestety zwieksza te liczbe)