import React, { Component } from 'react'
import { connect } from 'react-redux'

class SanPhamRedux extends Component {
    render() {
        let { sanPham } = this.props
        // console.log('this.props', this.props)
        //sanPham=this.props.sanPham (nhận props truyền vào)
        return (

            <div className="card">
                <img className='w-100' src={sanPham.hinhAnh} alt="..." />
                <div className="card-body bg-dark text-white">
                    <p>Tên sản phẩm: {sanPham.tenSP}</p>
                    <p>Giá bán: {sanPham.giaBan}</p>
                    <button className="btn btn-success" onClick={() => { this.props.themGioHang(sanPham) }}>Thêm vào giỏ hàng</button>
                </div>

            </div>


        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        themGioHang: (sanPhamClick) => {
            // console.log(sanPhamClick)
            const action = {
                type: "THEM_GIO_HANG",//thuộc tính bắt buộc của redux
                sanPhamClick
            };
            //gửi dữ liệu lên redux
            dispatch(action)
        }
    }
}
export default connect(null, mapDispatchToProps)(SanPhamRedux)