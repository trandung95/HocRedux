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
                    <td>{sanPham.soLuong}</td>
                    <td>{sanPham.giaBan * sanPham.soLuong}</td>
                    <td>
                        <button className='btn btn-success'>Thanh toán</button>
                        <button className="btn btn-danger ml-2">Xóa</button>
                    </td>
                </tr>
            )
        })
    }
    render() {
        return (
            <div>
                <h3>ModalGioHangRedux</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Mã sản phẩm</th>
                            <th>Tên sản phẩm</th>
                            <th>Giá bán</th>
                            <th>Số lượng</th>
                            <th>Thành tiền</th>
                            <th>
                            </th>
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

const mapStateToProps = (rootReducer) => {
    return {
        // gioHangStateToProps: rootReducer.GioHangReducer.gioHangMacDinh
        gioHangStateToProps: rootReducer

    }
}

export default connect(mapStateToProps, null)(ModalGioHangRedux)