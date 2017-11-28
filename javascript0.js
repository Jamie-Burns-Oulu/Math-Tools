const convert = {
  bin2oct : s => parseInt(s, 2).toString(8),
  bin2dec : s => parseInt(s, 2).toString(10),
  bin2hex : s => parseInt(s, 2).toString(16),
  oct2bin : s => parseInt(s, 8).toString(2),
  oct2dec : s => parseInt(s, 8).toString(10),
  oct2hex : s => parseInt(s, 8).toString(16),
  dec2bin : s => parseInt(s, 10).toString(2),
  dec2oct : s => parseInt(s, 10).toString(8),
  dec2hex : s => parseInt(s, 10).toString(16),
  hex2bin : s => parseInt(s, 16).toString(2),
  hex2oct : s => parseInt(s, 16).toString(8),
  hex2dec : s => parseInt(s, 16).toString(10)
};
