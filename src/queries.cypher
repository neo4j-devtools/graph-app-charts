MATCH (p:Person)-->(m:Movie) WHERE $name is null OR toLower(p.name) contains toLower($name)
RETURN p { .name, .born, movieCount: count(distinct m), firstYear: min(m.released), lastYear: max(m.released), years: max(m.released)-min(m.released), 
           moviesPerYear: toFloat(count(distinct m))/(max(m.released)-min(m.released)+1), coStaff: sum(size((m)<--())-1),
           movies: collect(m {.title, .released, staff: [(m)<--(p) | p.name]}) } as person