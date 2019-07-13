import json
# import copy 
import pprint
from astropy import units as u
from astropy.coordinates import SkyCoord

with open('frb.json') as f:
    data = json.load(f)
    #print(d)
# pprint.pprint(data)
# data['frbs'][0].keys()  # data['frbs'] is a list of dics

## newdata = copy.deepcopy(data)  did not need a copy of the dict
    
for item in data['frbs']:
    print('dec',item['rop_decj'])
    print('ra', item['rop_raj'])
    hourcoord =item['rop_raj']+' '+item['rop_decj']
    print(hourcoord)
    degcoord = SkyCoord(hourcoord, unit=(u.hourangle, u.deg))
    print(degcoord)
    print(degcoord.ra.value,degcoord.dec.value)
    item['rop_raj'] = degcoord.ra.value
    item['rop_decj'] = degcoord.dec.value

pprint.pprint(data)    
with open('frbs2.json', 'w') as fp:
    json.dump(data, fp)      