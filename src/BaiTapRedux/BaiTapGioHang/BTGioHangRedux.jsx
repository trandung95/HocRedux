import React, { Component } from 'react'
import ModalGioHangRedux from '../ModalGioHangRedux'
import DanhSachSanPhamRedux from './DanhSachSanPhamRedux'
import SanPhamRedux from './SanPhamRedux'

export default class BTGioHangRedux extends Component {
    mangDienThoai = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AmoLED, 6.2, FullHD", "heDieuHanh": "Android 9.0", "cameraTruoc": "20MP", "cameraSau": "Chính 48Mp phụ 8MP,5MP", "ram": "4GB", "ROM": "64GB", "giaBan": 5700000, "hinhAnh": "https://i.pravatar.cc?u=1" },
        { "maSP": 2, "tenSP": "Meizu 16X", "manHinh": "AmoLED, 6.2, FullHD", "heDieuHanh": "Android 9.0", "cameraTruoc": "20MP", "cameraSau": "Chính 48Mp phụ 8MP,5MP", "ram": "4GB", "ROM": "64GB", "giaBan": 7600000, "hinhAnh": "https://i.pravatar.cc?u=2" },
        { "maSP": 3, "tenSP": "Iphone gì gì đấy", "manHinh": "AmoLED, 6.2, FullHD", "heDieuHanh": "Android 9.0", "cameraTruoc": "20MP", "cameraSau": "Chính 48Mp phụ 8MP,5MP", "ram": "4GB", "ROM": "64GB", "giaBan": 2700000, "hinhAnh": "https://i.pravatar.cc?u=4" },
        { "maSP": 4, "tenSP": "Saamsung gì đấy", "manHinh": "rectina, 7.2, QHD", "heDieuHanh": "Android 9.0", "cameraTruoc": "20MP", "cameraSau": "Chính 48Mp phụ 8MP,5MP", "ram": "4GB", "ROM": "64GB", "giaBan": 1500000, "hinhAnh": "https://i.pravatar.cc?u=5" },
    ]
    render() {
        return (
            <div className='container'>
                <div className="text-right">
                    <span style={{ fontWeight: 'bold', fontSize: 20, cursor: 'pointer' }}>
                        <i className='text-danger fa fa-shopping-cart'>(0)</i>
                    </span>
                </div>
                <h3>Bai tap gio hang redux</h3>
                <ModalGioHangRedux />
                <h3 className='mt-3 text-center text-success'>Danh sách sản phẩm</h3>
                <div className="row">
                    {this.mangDienThoai.map((item, index) => {
                        return <div className='col-4' key={index}>
                            <SanPhamRedux sanPham={item} />
                        </div>
                    })}
                </div>
                <DanhSachSanPhamRedux />

            </div>
        )
    }
}
