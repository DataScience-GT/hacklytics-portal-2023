export const ListCheckins = `query ListCheckins {
        listCheckins {
            items {
                event {
                    id
                }
            }
        }
    }
`;

export const sub_query = `
subscription OnCreateCheckin {
    onCreateCheckin {
    event {
        id
    }
    }
}
`;