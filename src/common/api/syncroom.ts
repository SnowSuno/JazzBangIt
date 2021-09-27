import axios from "axios";
import {RoomType} from "../types/dataTypes";

import {tagMaskDecoder} from "../util/tagMaskDecoder";

const API_ENDPOINT = "https://webapi.syncroom.appservice.yamaha.com/ndroom/room_list.json?pagesize=500&realm=4";

export const getApiData = async () => {
    const response = await axios.get<Response>(API_ENDPOINT, {timeout: 5000});
    return response.data.rooms.map(({room_name, room_desc, num_members, need_passwd, tag_mask, tag_orig}): RoomType => ({
        name: room_name,
        desc: room_desc ? room_desc.trim() : "",
        members: num_members,
        tags: tag_mask ? tagMaskDecoder(tag_mask, tag_orig) : [],
        isPrivate: need_passwd
    }));
}

export interface IconData {
    icon: string,
    iconurl: string
}

export interface RoomData {
    index: number,
    room_name: string,
    room_desc: string,
    need_passwd: boolean,
    create_time: string,
    creator_mid: string,
    creator_nick: string,
    creator_icon: IconData,
    num_members: number,
    members: string[],
    iconlist: IconData[],
    tag_mask: string,
    tag_orig: string,
}

interface Response {
    rooms: RoomData[]
}