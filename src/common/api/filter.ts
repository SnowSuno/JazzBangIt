import {RoomType} from "../types/dataTypes";

export const filterData = (data: RoomType[], keywords: string[]): RoomType[] => (
    data.filter(filter(keywords))
);

const filter = (keywords: string[]) => (room: RoomType) => {
    return keywords.some(keyword => room.name.toLowerCase()
        .includes(keyword.toLowerCase()));
};
