'use client'

import React, { useState } from 'react';
import { Plus, Trash2, Calculator, Save, ArrowLeft, PackagePlus, DollarSign, Layers, X, Search, Filter, MoreVertical, Edit, Eye, TrendingUp, Package, Grid, List } from 'lucide-react';

// ==================== ADD PRODUCT PAGE ====================
function Example({ onSave, onCancel, editProduct }) {
  const [productName, setProductName] = useState(editProduct?.name || '');
  const [items, setItems] = useState
  
  (editProduct?.items || [
    {
      id: 1,
      name: '',
      unit: 'kg',
      type: 'material',
      qty: 0,
      price: 0
    }
  ]);

  const addItem = () => {
    setItems([
      ...items,
      {
        id: Date.now(),
        name: '',
        unit: 'kg',
        type: 'material',
        qty: 0,
        price: 0
      }
    ]);
  };

  const removeItem = (id) => {
    if (items.length > 1) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  const updateItem = (id, field, value) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  const calculateItemTotal = (item) => {
    return (parseFloat(item.qty) || 0) * (parseFloat(item.price) || 0);
  };

  const calculateGrandTotal = () => {
    return items.reduce((total, item) => total + calculateItemTotal(item), 0);
  };

  const getTotalByType = (type) => {
    return items
      .filter(item => item.type === type)
      .reduce((total, item) => total + calculateItemTotal(item), 0);
  };

  const handleSave = () => {
    if (!productName.trim()) {
      alert('Nama produk harus diisi!');
      return;
    }
    
    const product = {
      id: editProduct?.id || Date.now(),
      name: productName,
      items: items,
      total: calculateGrandTotal(),
      totalMaterial: getTotalByType('material'),
      totalLabor: getTotalByType('labor'),
      totalOverhead: getTotalByType('overhead'),
      createdAt: editProduct?.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    onSave(product);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button 
                onClick={onCancel}
                className="p-2 hover:bg-gray-100 rounded-lg transition"
              >
                <ArrowLeft className="w-6 h-6 text-gray-700" />
              </button>
              <div>
                <h1 className="text-3xl font-black text-black">
                  {editProduct ? 'Edit Produk' : 'Tambah Produk Baru'}
                </h1>
                <p className="text-gray-600 mt-1">Masukkan detail produk dan komponen biaya</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={onCancel}
                className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition"
              >
                Batal
              </button>
              <button 
                onClick={handleSave}
                className="px-6 py-3 bg-black text-white rounded-xl font-semibold hover:bg-gray-900 transition shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                <Save className="w-5 h-5" />
                Simpan Produk
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Product Info Card */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-black p-3 rounded-xl">
                  <PackagePlus className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-black">Informasi Produk</h2>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Nama Produk *
                </label>
                <input
                  type="text"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  placeholder="Contoh: Roti Tawar Premium"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-black focus:outline-none transition text-lg"
                />
              </div>
            </div>

            {/* Item Costs Card */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="bg-black p-3 rounded-xl">
                    <Layers className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-black">Komponen Biaya</h2>
                </div>
                <button
                  onClick={addItem}
                  className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg font-semibold hover:bg-gray-900 transition"
                >
                  <Plus className="w-5 h-5" />
                  Tambah Item
                </button>
              </div>

              <div className="space-y-4">
                {items.map((item, index) => (
                  <div 
                    key={item.id} 
                    className="group relative bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-6 hover:border-gray-400 transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="absolute -top-3 -left-3 bg-black text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                      {index + 1}
                    </div>

                    {items.length > 1 && (
                      <button
                        onClick={() => removeItem(item.id)}
                        className="absolute -top-3 -right-3 bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-600 transition shadow-lg opacity-0 group-hover:opacity-100"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="md:col-span-2">
                        <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">
                          Nama Item
                        </label>
                        <input
                          type="text"
                          value={item.name}
                          onChange={(e) => updateItem(item.id, 'name', e.target.value)}
                          placeholder="Contoh: Tepung Terigu"
                          className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-xl focus:border-black focus:outline-none transition"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">
                          Tipe
                        </label>
                        <select
                          value={item.type}
                          onChange={(e) => updateItem(item.id, 'type', e.target.value)}
                          className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-xl focus:border-black focus:outline-none transition bg-white"
                        >
                          <option value="material">Material</option>
                          <option value="labor">Labor</option>
                          <option value="overhead">Overhead</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">
                          Satuan
                        </label>
                        <select
                          value={item.unit}
                          onChange={(e) => updateItem(item.id, 'unit', e.target.value)}
                          className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-xl focus:border-black focus:outline-none transition bg-white"
                        >
                          <option value="kg">Kilogram (kg)</option>
                          <option value="gram">Gram (g)</option>
                          <option value="liter">Liter (L)</option>
                          <option value="ml">Mililiter (mL)</option>
                          <option value="pcs">Pieces (pcs)</option>
                          <option value="box">Box</option>
                          <option value="meter">Meter (m)</option>
                          <option value="hour">Jam (hour)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">
                          Jumlah (Qty)
                        </label>
                        <input
                          type="number"
                          step="0.01"
                          value={item.qty}
                          onChange={(e) => updateItem(item.id, 'qty', e.target.value)}
                          placeholder="0"
                          className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-xl focus:border-black focus:outline-none transition"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">
                          Harga per {item.unit}
                        </label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-semibold">
                            Rp
                          </span>
                          <input
                            type="number"
                            step="0.01"
                            value={item.price}
                            onChange={(e) => updateItem(item.id, 'price', e.target.value)}
                            placeholder="0"
                            className="w-full pl-10 pr-4 py-2.5 border-2 border-gray-200 rounded-xl focus:border-black focus:outline-none transition"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t-2 border-gray-200">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-gray-600">Subtotal Item:</span>
                        <span className="text-2xl font-black text-black">
                          Rp {calculateItemTotal(item).toLocaleString('id-ID')}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              <div className="bg-gradient-to-br from-black to-gray-900 rounded-2xl shadow-2xl p-8 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <Calculator className="w-8 h-8" />
                  <h3 className="text-2xl font-bold">Ringkasan Biaya</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-gray-700">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                      <span className="font-medium">Material</span>
                    </div>
                    <span className="font-bold">
                      Rp {getTotalByType('material').toLocaleString('id-ID')}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pb-3 border-b border-gray-700">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <span className="font-medium">Labor</span>
                    </div>
                    <span className="font-bold">
                      Rp {getTotalByType('labor').toLocaleString('id-ID')}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pb-3 border-b border-gray-700">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <span className="font-medium">Overhead</span>
                    </div>
                    <span className="font-bold">
                      Rp {getTotalByType('overhead').toLocaleString('id-ID')}
                    </span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t-2 border-gray-700">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-semibold text-gray-300">Total HPP</span>
                  </div>
                  <div className="text-4xl font-black">
                    Rp {calculateGrandTotal().toLocaleString('id-ID')}
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-700">
                  <div className="text-sm text-gray-400">
                    Total {items.length} komponen biaya
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
                <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  Tips Kalkulasi HPP
                </h4>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">•</span>
                    <span>Pastikan semua komponen biaya tercatat</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">•</span>
                    <span>Gunakan satuan yang konsisten</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">•</span>
                    <span>Update harga secara berkala</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==================== PRODUCT LIST PAGE ====================
function ProductListPage({ products, onAddNew, onEdit, onDelete, onViewDetail }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-black text-black">Produk Saya</h1>
              <p className="text-gray-600 mt-1">Kelola semua produk dan HPP Anda</p>
            </div>
            <button
              onClick={onAddNew}
              className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-xl font-semibold hover:bg-gray-900 transition shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              <Plus className="w-5 h-5" />
              Tambah Produk
            </button>
          </div>

          {/* Search and Filter Bar */}
          <div className="flex items-center gap-4">
            <div className="flex-1 relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Cari produk..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-black focus:outline-none transition"
              />
            </div>
            <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition ${viewMode === 'grid' ? 'bg-white shadow' : 'hover:bg-gray-200'}`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition ${viewMode === 'list' ? 'bg-white shadow' : 'hover:bg-gray-200'}`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-semibold mb-1">Total Produk</p>
                <p className="text-3xl font-black text-black">{products.length}</p>
              </div>
              <div className="bg-blue-100 p-4 rounded-xl">
                <Package className="w-8 h-8 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-semibold mb-1">Rata-rata HPP</p>
                <p className="text-3xl font-black text-black">
                  Rp {products.length > 0 ? Math.round(products.reduce((sum, p) => sum + p.total, 0) / products.length).toLocaleString('id-ID') : '0'}
                </p>
              </div>
              <div className="bg-green-100 p-4 rounded-xl">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-semibold mb-1">Total Nilai HPP</p>
                <p className="text-3xl font-black text-black">
                  Rp {products.reduce((sum, p) => sum + p.total, 0).toLocaleString('id-ID')}
                </p>
              </div>
              <div className="bg-yellow-100 p-4 rounded-xl">
                <Calculator className="w-8 h-8 text-yellow-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid/List */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-16 text-center">
            <Package className="w-20 h-20 text-gray-300 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              {searchQuery ? 'Produk tidak ditemukan' : 'Belum ada produk'}
            </h3>
            <p className="text-gray-600 mb-6">
              {searchQuery ? 'Coba kata kunci lain' : 'Mulai tambahkan produk pertama Anda'}
            </p>
            {!searchQuery && (
              <button
                onClick={onAddNew}
                className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-xl font-semibold hover:bg-gray-900 transition"
              >
                <Plus className="w-5 h-5" />
                Tambah Produk
              </button>
            )}
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-black mb-2 group-hover:text-gray-700 transition">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {product.items.length} komponen biaya
                    </p>
                  </div>
                  <div className="relative">
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                      <MoreVertical className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-gray-600">Material</span>
                    </div>
                    <span className="font-semibold">Rp {product.totalMaterial.toLocaleString('id-ID')}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-gray-600">Labor</span>
                    </div>
                    <span className="font-semibold">Rp {product.totalLabor.toLocaleString('id-ID')}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-gray-600">Overhead</span>
                    </div>
                    <span className="font-semibold">Rp {product.totalOverhead.toLocaleString('id-ID')}</span>
                  </div>
                </div>

                <div className="pt-4 border-t-2 border-gray-200 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-600">Total HPP</span>
                    <span className="text-2xl font-black text-black">
                      Rp {product.total.toLocaleString('id-ID')}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onViewDetail(product)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition"
                  >
                    <Eye className="w-4 h-4" />
                    Lihat
                  </button>
                  <button
                    onClick={() => onEdit(product)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-black text-white rounded-lg font-semibold hover:bg-gray-900 transition"
                  >
                    <Edit className="w-4 h-4" />
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(product.id)}
                    className="px-4 py-2 bg-red-50 text-red-600 rounded-lg font-semibold hover:bg-red-100 transition"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500">
                    Terakhir diupdate: {formatDate(product.updatedAt)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Nama Produk</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Material</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Labor</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Overhead</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Total HPP</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredProducts.map(product => (
                  <tr key={product.id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4">
                      <div>
                        <div className="font-bold text-black">{product.name}</div>
                        <div className="text-sm text-gray-500">{product.items.length} komponen</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-semibold">Rp {product.totalMaterial.toLocaleString('id-ID')}</td>
                    <td className="px-6 py-4 font-semibold">Rp {product.totalLabor.toLocaleString('id-ID')}</td>
                    <td className="px-6 py-4 font-semibold">Rp {product.totalOverhead.toLocaleString('id-ID')}</td>
                    <td className="px-6 py-4 font-black text-lg">Rp {product.total.toLocaleString('id-ID')}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onViewDetail(product)}
                          className="p-2 hover:bg-gray-200 rounded-lg transition"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => onEdit(product)}
                          className="p-2 hover:bg-gray-200 rounded-lg transition"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => onDelete(product.id)}
                          className="p-2 hover:bg-red-100 text-red-600 rounded-lg transition"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

// ==================== MAIN APP ====================
export default function CostlifyApp() {
  const [currentPage, setCurrentPage] = useState('list'); // 'list' or 'add'
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  const handleAddNew = () => {
    setEditingProduct(null);
    setCurrentPage('add');
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setCurrentPage('add');
  };

  const handleSave = (product) => {
    if (editingProduct) {
      // Update existing product
      setProducts(products.map(p => p.id === product.id ? product : p));
    } else {
      // Add new product
      setProducts([...products, product]);
    }
    setCurrentPage('list');
    setEditingProduct(null);
  };

  const handleCancel = () => {
    setCurrentPage('list');
    setEditingProduct(null);
  };

  const handleDelete = (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus produk ini?')) {
      setProducts(products.filter(p => p.id !== id));
    }
  };

  const handleViewDetail = (product) => {
    alert(`Detail produk: ${product.name}\nTotal HPP: Rp ${product.total.toLocaleString('id-ID')}`);
  };

  return (
    <>
      {currentPage === 'list' ? (
        <ProductListPage
          products={products}
          onAddNew={handleAddNew}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onViewDetail={handleViewDetail}
        />
      ) : (
        <Example
          onSave={handleSave}
          onCancel={handleCancel}
          editProduct={editingProduct}
        />
      )}
    </>
  );
}