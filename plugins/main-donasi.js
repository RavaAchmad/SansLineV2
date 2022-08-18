let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, `
╭─「 Donasi • Dana 」
│ • Three [6289513388950]
│ • Dana  [6281212035575]
╰────
╭─「 *NOTE* 」
│ > Ingin donasi? Wa.me/6281212035575
│ _Hasil donasi akan digunakan buat sewa_
│ _24jam tanpa kendala_
╰────
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.tags = ['main']
handler.command = /^dona(te|si)$/i

module.exports = handler
