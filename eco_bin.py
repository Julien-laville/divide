#Sample Input
1  2  3  4  5  6  7  8  9
5  10  5  20  10  5  10  20  10
#Sample Output
BCG  30
CBG  50

lineRex = re.compile(/(\d*) +/)

f = open('eco_bin_data')
binLine = f.readLine()

res = binLine.match(lineRex)
