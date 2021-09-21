const ADD = "filter/ADD" as const;
const DELETE = "filter/DELETE" as const;

export const addKeyword = (keyword: string) => ({
    type: ADD,
    keyword: keyword,
});
export const deleteKeyword = (keyword: string) => ({
    type: DELETE,
    keyword: keyword,
});

type KeywordAction =
    | ReturnType<typeof addKeyword>
    | ReturnType<typeof deleteKeyword>;

type KeywordState = {
    keywords :string[]
};

const initialState: KeywordState = {
    keywords: ["jazz", "재즈"]
};

function keyword(
    state: KeywordState = initialState,
    action: KeywordAction
): KeywordState {
    switch (action.type) {
        case ADD:
            return state.keywords.includes(action.keyword)
                ? state
                : {keywords: state.keywords.concat(action.keyword)}
        case DELETE:
            return {
                keywords: state.keywords.filter(kw => kw !== action.keyword)
            };
        default:
            return state;
    }
}

export default keyword;
