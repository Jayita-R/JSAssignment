var fs=require('fs');

fs.appendFile('myNewFile.txt','Hi Jayita...how are you!',function(err){
    if(err) throw err;
    console.log("Updated!");

});
fs.open('myNewFile.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('Opened!');
  });
fs.writeFile('myNewFile1.txt', 'Its so nice to meet you!', function (err) {
    if (err) throw err;
    console.log('Created new file with some info!');
  });
  fs.unlink('myNewFile2.txt', function (err) {
    if (err) throw err;
    console.log('File deleted!');
  });
  fs.rename('myNewFile1.txt','myfile.txt',function(err){
      if(err) throw err;
      console.log("File Renamed!");

  });
