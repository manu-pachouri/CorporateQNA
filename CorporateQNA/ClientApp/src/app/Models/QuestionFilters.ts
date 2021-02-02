export enum enumShowFilters{
    "All",
    "My Questions",
    "My Participations",
    "Hot",
    "Solved",
    "Unsolved"
}

export enum enumSortFilters{
    "All",
    "Recent",
    "Last 10 Days",
    "Last 30 Days"
}

export class showFilters{
 public array = [
        {
            id:enumShowFilters.Hot,
            name:enumShowFilters[enumShowFilters.Hot]
        },
        {
            id:enumShowFilters["My Participations"],
            name:enumShowFilters[enumShowFilters["My Participations"]]
        },
        {
            id:enumShowFilters["My Questions"],
            name:enumShowFilters[enumShowFilters["My Questions"]]
        },
        {
            id:enumShowFilters.Solved,
            name:enumShowFilters[enumShowFilters.Solved]
        },
        {
            id:enumShowFilters.Unsolved,
            name:enumShowFilters[enumShowFilters.Unsolved]
        }
    ];
}

export class sortFilters{
    array = [
        {
            id:enumSortFilters.Recent,
            name:enumSortFilters[enumSortFilters.Recent]
        },
        {
            id:enumSortFilters['Last 10 Days'],
            name:enumSortFilters[enumSortFilters['Last 10 Days']]
        },
        {
            id:enumSortFilters['Last 30 Days'],
            name:enumSortFilters[enumSortFilters['Last 30 Days']]
        },
    ]; 
}