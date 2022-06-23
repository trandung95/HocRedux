import React, { Component } from 'react'
import { connect } from 'react-redux'

class ModalGioHangRedux extends Component {
    renderGioHang = () => {
        // console.log("props", this.props);
        // console.log("props.gioHangStateToProps", this.props.gioHangStateToProps)
        // return this.props.gioHangStateToProps.map((sanPham, index) => {
        let { gioHangStateToProps } = this.props
        return gioHangStateToProps.GioHangReducer.map((sanPham, index) => {
            //gioHang là lấy từ connect về
            return (
                <tr key={index}>
                    <td>{sanPham.maSP}</td>
                    <td>{sanPham.tenSP}</td>
                    <td>{sanPham.giaBan}</td>
                    <td>
                        <button className='btn btn-danger' onClick={() => { this.props.tangGiamSoLuong(sanPham.maSP, -1) }}>-</button>
                        {sanPham.soLuong}
                        <button className='btn btn-success' onClick={() => { this.props.tangGiamSoLuong(sanPham.maSP, 1) }}>+</button>
                    </td>
                    <td>{sanPham.giaBan * sanPham.soLuong}</td>
                    <td>
                        <button className='btn btn-success' onClick={() => { this.props.thanhToan(sanPham) }}>Thanh toán</button>
                        <button className="btn btn-danger ml-2" onClick={() => { this.props.xoaGioHang(sanPham.maSP) }}>Xóa</button>
                    </td>
                </tr>
            )
        })
    }
    render() {
        return (
            <div>
                <h3 className='display-4 text-success'>ModalGioHangRedux</h3>
                <table>
                    <thead className='text-primary'>
                        <tr>
                            <th className='pr-3'>Mã sản phẩm</th>
                            <th className='pr-3'>Tên sản phẩm</th>
                            <th className='pr-3'>Giá bán</th>
                            <th className='pr-3'>Số lượng</th>
                            <th className='pr-3'>Thành tiền</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderGioHang()}
                    </tbody>
                </table>

            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        xoaGioHang: (sanPhamXoa) => {
            if (window.confirm(`Bạn có muốn xóa sản phẩm này không?`)) {
                console.log(sanPhamXoa.tenSP);
                const action = {
                    type: 'XOA_GIO_HANG',
                    sanPhamXoa
                };
                dispatch(action)
            }

        },
        tangGiamSoLuong: (maSP, soLuong) => {
            const action = {
                type: 'TANG_GIAM_SO_LUONG',
                maSP, soLuong
            };
            dispatch(action);
        },
        thanhToan: (sanPham) => {
            const action = {
                type: 'THANH_TOAN',
                sanPham
            };
            dispatch(action);
        }
    }
}
const mapStateToProps = (rootReducer) => {
    return {
        // gioHangStateToProps: rootReducer.GioHangReducer.gioHangMacDinh
        gioHangStateToProps: rootReducer

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalGioHangRedux)