export const getLikeCount = (originState: boolean, changeState: boolean, originCount: number) => {

    //하트가 원래 눌러진 상태
    if (originState) {
        return changeState ? originCount : originCount - 1
    }

    // 하트를 누르지 않은 상태
    if (!originState) {
        return changeState ? originCount + 1 : originCount
    }
}

