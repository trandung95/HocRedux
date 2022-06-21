// const stateGioHangDefault = {
//     gioHangMacDinh: [
//         { maSP: 10, tenSP: 'Iphone', soLuong: 1, giaBan: 1000 },
//         { maSP: 20, tenSP: 'Samsung', soLuong: 2, giaBan: 2000 },
//     ],
// }

let stateGioHangDefault = [
    { maSP: 10, tenSP: 'Iphone', soLuong: 1, giaBan: 1000 }
]

//state nếu không truyền gì cả thì sẽ mặc định là lấy stateGioHangReducerDefault
export const GioHangReducer = (state = stateGioHangDefault, action) => {
    
    switch (action.type) {
        case 'THEM_GIO_HANG': {
            // cloneState.gioHangMacDinh = [...cloneState.gioHangMacDinh, action.sanPhamClick]
            // console.log(cloneState)
            // return cloneState
            let giohangAction = [...state, action.sanPhamClick];
            return giohangAction
        }

    }
    return state
}