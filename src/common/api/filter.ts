import {RoomType} from "../types/dataTypes";

export const filterData = (data: RoomType[], keywords: string[]): RoomType[] => (
    data.filter(filter(keywords))
);

const filter = (keywords: string[]) => keywords.length !== 0
    ? (room: RoomType) => {
        const searchScope: string[] = [
            room.name,
            room.desc,
            ...room.tags
        ]
    
        return (keywords.some(keyword => searchScope.some(searchString =>  
            (searchString.toLowerCase().includes(keyword.toLowerCase())))));
    }
    : () => true;
