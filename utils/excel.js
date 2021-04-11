const XLSX = require('xlsx')

const getData = (route) => {
	const workbook = XLSX.readFile(route)
	const rows = XLSX.utils.sheet_to_json(workbook.Sheets.Hoja1, {
		header: 1,
		raw: false,
	})
	let data = new DataTable(rows[0])
	rows.shift()
	rows.forEach((row) => data.add(row))
	console.log(data)
	return data
}

exports.getData = getData
