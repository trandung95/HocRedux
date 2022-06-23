// const stateGioHangDefault = {
//     gioHangMacDinh: [
//         { maSP: 10, tenSP: 'Iphone', soLuong: 1, giaBan: 1000 },
//         { maSP: 20, tenSP: 'Samsung', soLuong: 2, giaBan: 2000 },
//     ],
// }

let stateGioHangDefault = [
    { maSP: 5, tenSP: 'Iphone', soLuong: 1, giaBan: 1000 }
]

//state nếu không truyền gì cả thì sẽ mặc định là lấy stateGioHangReducerDefault
export const GioHangReducer = (state = stateGioHangDefault, action) => {
    switch (action.type) {
        case 'THEM_GIO_HANG': {
            // cloneState.gioHangMacDinh = [...cloneState.gioHangMacDinh, action.sanPhamClick]
            // console.log(cloneState)
            // return cloneState
            let gioHangAction = [...state];//clone state
            let sanPhamGioHang = { ...action.sanPhamClick, soLuong: 1 };//nếu sản phẩm chưa có thuộc tính số lượng thì thêm vào
            let sp = gioHangAction.find(item => item.maSP === action.sanPhamClick.maSP);//tìm trong gioHangAction có phần tử nào maSP nào giống với action được gửi lên không
            if (sp) {
                sp.soLuong += 1;
            } else {
                gioHangAction.push(sanPhamGioHang);
            }
            return gioHangAction;
        }
        case 'XOA_GIO_HANG': {

            let gioHang = [...state];
            gioHang = gioHang.filter(item => item.maSP !== action.sanPhamXoa);
            return gioHang;
        }
        case 'TANG_GIAM_SO_LUONG': {
            let gioHangAction = [...state];
            let sanPham = gioHangAction.find(item => item.maSP === action.maSP);
            // console.log("sanPham: ", sanPham);
            sanPham.soLuong += action.soLuong;
            if (sanPham.soLuong === 0) {
                if (window.confirm("Bạn có muốn xóa sản phẩm này không?")) {
                    // console.log(sanPham.soLuong)
                    gioHangAction = gioHangAction.filter(item => item.maSP !== action.maSP)
                } else {
                    sanPham.soLuong -= action.soLuong;
                }
            }
            return gioHangAction;
        }
        case 'THANH_TOAN': {
            console.log(action.sanPham.soLuong);
            return state;
        }
    }
    return state
}