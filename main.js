var cm = require('csv-mysql');

var data = '"c1","c2","c3"\n"1","2","3"\n"4","5","6"';
var options = {
	mysql: {
		host: '10.41.1.173',
		user: 'admin',
		database: 'teste_db_renamepc',
	},
	csv: {
		comment: '#',
		quote: '"'
	},
	table: 'tb_sepat'
}

cm.import(options, data, function(err, rows){
	if( err===null )err = false;
	expect(err).to.equal(false);
	done();
});