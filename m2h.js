var loc=[], hotspot=[], locNoHot=[], downloaded=[], processed=true, sidebar, makersLoc, makersLocNoHot, makersHotspot
cntrList = [["Afghanistan","AF"],["Albania","AL"],["Algeria","DZ"],["American Samoa","AS"],["Andorra","AD"],["Angola","AO"],["Anguilla","AI"],["Antarctica","AQ"],["Antigua and Barbuda","AG"],["Argentina","AR"],["Armenia","AM"],["Aruba","AW"],["Australia","AU"],["Austria","AT"],["Azerbaijan","AZ"],["Bahamas","BS"],["Bahrain","BH"],["Bangladesh","BD"],["Barbados","BB"],["Belarus","BY"],["Belgium","BE"],["Belize","BZ"],["Benin","BJ"],["Bermuda","BM"],["Bhutan","BT"],["Bolivia","BO"],["Bosnia and Herzegovina","BA"],["Botswana","BW"],["Bouvet Island","BV"],["Brazil","BR"],["British Indian Ocean Territory","IO"],["Brunei","BN"],["Bulgaria","BG"],["Burkina Faso","BF"],["Burundi","BI"],["Cambodia","KH"],["Cameroon","CM"],["Canada","CA"],["Cape Verde","CV"],["Cayman Islands","KY"],["Central African Republic","CF"],["Chad","TD"],["Chile","CL"],["China","CN"],["Christmas Island","CX"],["Clipperton Island","CP"],["Cocos (Keeling) Islands","CC"],["Colombia","CO"],["Comoros","KM"],["Congo","CG"],["Cook Islands","CK"],["Costa Rica","CR"],["Croatia","HR"],["Cuba","CU"],["Cyprus","CY"],["Czech Republic","CZ"],["Côte d'Ivoire","CI"],["DR Congo","CD"],["Denmark","DK"],["Djibouti","DJ"],["Dominica","DM"],["Dominican Republic","DO"],["Ecuador","EC"],["Egypt","EG"],["El Salvador","SV"],["Equatorial Guinea","GQ"],["Eritrea","ER"],["Estonia","EE"],["Ethiopia","ET"],["Falkland Islands (Malvinas)","FK"],["Faroe Islands","FO"],["Fiji","FJ"],["Finland","FI"],["France","FR"],["French Guiana","GF"],["French Polynesia","PF"],["French Southern and Antarctic Lands","TF"],["Gabon","GA"],["Gambia","GM"],["Georgia","GE"],["Germany","DE"],["Ghana","GH"],["Gibraltar","GI"],["Greece","GR"],["Greenland","GL"],["Grenada","GD"],["Guadeloupe","GP"],["Guam","GU"],["Guatemala","GT"],["Guernsey","GG"],["Guinea","GN"],["Guinea-Bissau","GW"],["Guyana","GY"],["Haiti","HT"],["Heard Island and McDonald Islands","HM"],["High Seas","XX"],["Honduras","HN"],["Hong Kong","HK"],["Hungary","HU"],["Iceland","IS"],["India","IN"],["Indonesia","ID"],["Iran","IR"],["Iraq","IQ"],["Ireland","IE"],["Isle of Man","IM"],["Israel","IL"],["Italy","IT"],["Jamaica","JM"],["Japan","JP"],["Jersey","JE"],["Jordan","JO"],["Kazakhstan","KZ"],["Kenya","KE"],["Kiribati","KI"],["Kuwait","KW"],["Kyrgyzstan","KG"],["Laos","LA"],["Latvia","LV"],["Lebanon","LB"],["Lesotho","LS"],["Liberia","LR"],["Libya","LY"],["Liechtenstein","LI"],["Lithuania","LT"],["Luxembourg","LU"],["Macau","MO"],["Macedonia","MK"],["Madagascar","MG"],["Malawi","MW"],["Malaysia","MY"],["Maldives","MV"],["Mali","ML"],["Malta","MT"],["Marshall Islands","MH"],["Martinique","MQ"],["Mauritania","MR"],["Mauritius","MU"],["Mayotte","YT"],["Mexico","MX"],["Micronesia","FM"],["Moldova","MD"],["Monaco","MC"],["Mongolia","MN"],["Montenegro","ME"],["Montserrat","MS"],["Morocco","MA"],["Mozambique","MZ"],["Myanmar","MM"],["Namibia","NA"],["Nauru","NR"],["Nepal","NP"],["Netherlands","NL"],["Netherlands Antilles","AN"],["New Caledonia","NC"],["New Zealand","NZ"],["Nicaragua","NI"],["Niger","NE"],["Nigeria","NG"],["Niue","NU"],["Norfolk Island","NF"],["North Korea","KP"],["Northern Mariana Islands","MP"],["Norway","NO"],["Oman","OM"],["Pakistan","PK"],["Palau","PW"],["Palestinian Territory","PS"],["Panama","PA"],["Papua New Guinea","PG"],["Paraguay","PY"],["Peru","PE"],["Philippines","PH"],["Pitcairn Islands","PN"],["Poland","PL"],["Portugal","PT"],["Puerto Rico","PR"],["Qatar","QA"],["Romania","RO"],["Russia","RU"],["Rwanda","RW"],["Réunion","RE"],["Saint Barthélemy","BL"],["Saint Helena, Ascension, and Tristan da Cunha","SH"],["Saint Kitts and Nevis","KN"],["Saint Lucia","LC"],["Saint Martin (French part)","MF"],["Saint Pierre and Miquelon","PM"],["Saint Vincent and the Grenadines","VC"],["Samoa","WS"],["San Marino","SM"],["Saudi Arabia","SA"],["Senegal","SN"],["Serbia","RS"],["Seychelles","SC"],["Sierra Leone","SL"],["Singapore","SG"],["Slovakia","SK"],["Slovenia","SI"],["Solomon Islands","SB"],["Somalia","SO"],["South Africa","ZA"],["South Georgia and South Sandwich Islands","GS"],["South Korea","KR"],["South Sudan","SS"],["Spain","ES"],["Sri Lanka","LK"],["Sudan","SD"],["Suriname","SR"],["Svalbard","SJ"],["Swaziland","SZ"],["Sweden","SE"],["Switzerland","CH"],["Syria","SY"],["São Tomé and Príncipe","ST"],["Taiwan","TW"],["Tajikistan","TJ"],["Tanzania","TZ"],["Thailand","TH"],["Timor-Leste","TL"],["Togo","TG"],["Tokelau","TK"],["Tonga","TO"],["Trinidad and Tobago","TT"],["Tunisia","TN"],["Turkey","TR"],["Turkmenistan","TM"],["Turks and Caicos Islands","TC"],["Tuvalu","TV"],["Uganda","UG"],["Ukraine","UA"],["United Arab Emirates","AE"],["United Kingdom","GB"],["United States","US"],["United States Minor Outlying Islands","UM"],["Uruguay","UY"],["Uzbekistan","UZ"],["Vanuatu","VU"],["Vatican City (Holy See)","VA"],["Venezuela","VE"],["Vietnam","VN"],["Virgin Islands (British)","VG"],["Virgin Islands (U.S.)","VI"],["Wallis and Futuna","WF"],["Western Sahara","EH"],["Yemen","YE"],["Zambia","ZM"],["Zimbabwe","ZW"],["Åland Islands","AX"]];


jQuery(document).ready(function() {

	jQuery('#avada-stylesheet-inline-css').remove()
	jQuery('#avada-stylesheet-css').remove()

	//Create map   
	map = new L.Map('map1');
	//map.setView(L.latLng(46.57591, 7.84956), 8);
	map.fitWorld().zoomIn();
	baseLayers = {
		'MapBox': L.tileLayer.provider('MapBox', {id: 'rafnuss.npl3amec',accessToken: token.mapbox}).addTo(map),
		'OpenStreetMap': L.tileLayer.provider('OpenStreetMap.Mapnik'),
	};
	control = L.control.layers(baseLayers, null, { collapsed: false	}).addTo(map);
	L.MakiMarkers.accessToken = token.mapbox;
	sidebar = L.control.sidebar('sidebar').addTo(map);

	makersHotspot = L.markerClusterGroup({	
		showCoverageOnHover:1, 
		maxClusterRadius:50,
		iconCreateFunction: function(cluster) {
			return L.icon({
				iconUrl: "https://zoziologie.raphaelnussbaumer.com/wp-content/plugins/Merge2Hotspot/hotspot-icon-hotspot-plus_small.png",
				iconAnchor: [12, 30],
				popupAnchor: [0, -12],
			})
		}
	});
	makersLocNoHot = L.featureGroup();
	control.addOverlay(makersHotspot.addTo(map),'eBird Hotspot')

	jQuery("#uploadMyEBirdData").change(function(evt) {
		if (processed){
			processFile( evt.target.files[0], evt.target.files[0].size )
		}
	});

	
	// Open my data if me in url
	if ( window.location.search.substring(1).indexOf('me') !== -1 ){
		map.spin(true);
		console.log('loading personal file')
		jQuery.get("https://zoziologie.raphaelnussbaumer.com/wp-content/plugins/SeeYourObservations/MyEBirdData.csv", function(data){
			if (processed){
				map.spin(false);
				processFile(data, data.length) 
			}
		})
	}
})

function FindLocationHotspot(){
	if (downloaded.length==0){
		alert('Download first some hotspot')
		return;
	}
	sidebar.open('messages');
	makersLocNoHot.clearLayers()
	locNoHot=[];
	control.removeLayer(makersLocNoHot)
	loc.forEach(function(l){
		var t1 = downloaded.indexOf(l.region)
		var t2 = downloaded.indexOf(l.region.split('-')[0])
		if (t1>-1 | t2>-1){
			var dist = hotspot.map(h => distance(parseFloat(l.Latitude), parseFloat(l.Longitude), h.lat, h.lng) )
			var mm = dist.reduce( (acc,curV, curI) => acc[0] > curV ? [curV, curI] : acc  ,[100000,undefined] )
			if (hotspot[mm[1]].locName == l.Location) {
				console.log(hotspot[mm[1]])
			} else {
				var pop = '<b>Name:</b> '+l.Location+' ('+l.region+')<br><b>Checklists: </b>'+ l.checklists.map( val => '<a href="https://ebird.org/view/checklist/'+val+'" target="_blank">'+val+'</a>' ).join(", ");
				pop = l.checklists.length>2 ? pop+'<br><a href="https://ebird.org/MyEBird?cmd=manageLocations" title="search for your location name in the search box. You need to be login in eBird">Change All locations at once</a>' : pop;
				var m = L.marker([parseFloat(l.Latitude), parseFloat(l.Longitude)],{
					icon:L.icon({
						iconUrl: "https://zoziologie.raphaelnussbaumer.com/wp-content/plugins/Merge2Hotspot/hotspot-icon_perso_small.png",
						iconAnchor: [12, 30],
						popupAnchor: [0, -12],
					})
				}).bindPopup(pop);
				makersLocNoHot.addLayer(m);
				var link = L.polyline([[parseFloat(l.Latitude), parseFloat(l.Longitude)],[hotspot[mm[1]].lat, hotspot[mm[1]].lng]], {color: 'red'})
				makersLocNoHot.addLayer(link);
				var ll = l;
				ll.distance = mm[0];
				ll.nearbyHot = hotspot[mm[1]];
				ll.marker = m;
				ll.link = link;
				locNoHot.push(ll);
			}
		}
	})
	control.addOverlay(makersLocNoHot.addTo(map),'Locations without hotspot')
	map.fitBounds(makersLocNoHot.getBounds(), {paddingTopLeft: [500, 0]});
	makersLoc.removeFrom(map)


	var tableRef = document.getElementById('messages-table');
	locNoHot = locNoHot.sort( (l1,l2) => l1.distance<l2.distance ? -1 : (l1.distance>l2.distance ? 1:0) )
	locNoHot.forEach(function(l){
		var newRow = tableRef.insertRow(tableRef.rows.length)
		newRow.setAttribute('onclick', 'map.setView(new L.LatLng('+l.Latitude+', +'+l.Longitude+'),16)',0);
		newRow.insertCell(0).appendChild(document.createTextNode(l.Location ));
		newRow.insertCell(1).appendChild(document.createTextNode( l.nearbyHot.locName+' ('+Math.round(l.distance*1000).toString()+'m)'));
	})
}

function distance(lat1, lon1, lat2, lon2) {
	var radlat1 = Math.PI * lat1/180;
	var radlat2 = Math.PI * lat2/180;
	var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(Math.PI * (lon1-lon2)/180);
	return Math.acos(Math.min(dist,1)) * 180/Math.PI * 60 * 1.1515 * 1.609344
}

function processFile( file, size ){
	var percent = 0;
	var progress = 0;
	const data = [];
	jQuery('#MyPg').show()
	var pgbar = document.getElementById("MyPgBar");
	Papa.parse(file, {
		header:true,
		step: function(row,handler) {
			data.push(row.data[0]);
			progress = progress + Object.values(row.data[0]).join(',').length;

			var newPercent = Math.round(progress / size * 100);
			if (newPercent === percent) return;
			percent = newPercent;
			handler.pause();

			pgbar.style.width = percent + '%'; 
			pgbar.innerHTML = percent * 1  + '%';
			setTimeout(function(){handler.resume()},0)
		},
		complete: function() {
			//data = results.data;
			//fields = results.meta.fields;
			processed=false

			map.spin(true);
			setTimeout(function(){

				var che = [];
				var name = [];
				data.forEach(function(d){
					if (che.indexOf(d['Submission ID'])<0 && d.Location!=undefined){
						if (name.indexOf(d.Location)<0){
							dnew={};
							dnew.Location = d.Location;
							dnew.Latitude = d.Latitude;
							dnew.Longitude = d.Longitude;
							dnew.region = d['State/Province'];
							dnew.checklists = [];
							loc.push(dnew)
							name.push(d.Location)
						}
						var i = name.indexOf(d.Location);
						loc[i].checklists.push(d['Submission ID'])
						che.push(d['Submission ID']);
					}
				})

				makersLoc = L.markerClusterGroup({	
					showCoverageOnHover:1,
					iconCreateFunction: function(e){
						var t=e.getAllChildMarkers().reduce( (c,m) => c+m.checklists.length,0)
						var i=" marker-cluster-"
						i+=10>t?"small":100>t?"medium":"large"
						t = t<1000 ? t : Math.round(t/1000)+'K'
						var divi = L.divIcon({
							html:"<div><span>"+t+"</span></div>",
							className:"marker-cluster"+i,
							iconSize: L.Point(40,40),
						})
						return divi
					}
				});

				loc.forEach(function(l){
					var pop = '<b>Name:</b> '+l.Location+' ('+l.region+')<br><b>Checklists: </b>'+ l.checklists.map( val => '<a href="https://ebird.org/view/checklist/'+val+'" target="_blank">'+val+'</a>' ).join(", ");
					var m = L.marker([parseFloat(l.Latitude), parseFloat(l.Longitude)],{
						icon:L.MakiMarkers.icon({
							icon: l.checklists.length < 100  ? l.checklists.length : (l.checklists.length < 1000 ? 'c' : 'k' ),
						})
					}).bindPopup(pop);
					m.checklists = l.checklists;
					m.name=l.Location;
					m.region = l.region;
					l.marker=m;
					makersLoc.addLayer(m);
				})

				control.addOverlay(makersLoc.addTo(map),'All Locations')
				map.fitBounds(makersLoc.getBounds(), {paddingTopLeft: [500, 0]});

				ListRegion(loc)

				map.spin(false);
				jQuery('#MyPg').hide()
			},0)
		},
	});
}


ListRegion = function(loc){
	sidebar.open('profile');
	var region = loc.reduce( function(acc, cur){
		var ind = acc.findIndex( x => x.locID == cur.region)
		if (ind <0 ){
			acc = acc.concat({locID: cur.region, count: 1})
		} else {
			acc[ind].count = acc[ind].count+1;
		}
		return acc;
	}, [] );

	region = region.sort(function(a, b){
		if(a.locID < b.locID) return -1;
		if(a.locID > b.locID) return 1;
		return 0;
	})

	var country = region.reduce( function(acc, cur){
		var ind = acc.findIndex( x => x.locID == cur.locID.split('-')[0])
		if (ind <0 ){
			var cn = cntrList.find( elmt => elmt[1] == cur.locID.split('-')[0])
			acc = acc.concat({locID: cur.locID.split('-')[0], count: cur.count, name: cn[0]})
		} else {
			acc[ind].count = acc[ind].count+cur.count;
		}
		return acc;
	}, [] )

	country.forEach(function(c){
		html = '<div class="list-group-item "><a href="#list-country-'+c.locID+'" class="list-crl-a" data-toggle="collapse"><i class="fas fa-chevron fa-chevron-right"></i>'+c.name+'</a><a href="#" class="rcl-download" id="rcl-download-'+c.locID+'"><i class="fas fa-download" ></i></a><span class="badge badge-primary badge-pill">'+c.count.toString()+'</span></div>\
		<div class="list-group collapse" id="list-country-'+c.locID+'"></div>';
		jQuery('#list-countrregionlist').append(html)
		region.forEach(function(r){
			if(r.locID.split('-')[0]==c.locID){
				html = '<div class="list-group-item"><span id="locID-'+r.locID+'">'+r.locID+'</span></a>\
				<a href="#" class="rcl-download" id="rcl-download-'+r.locID+'"><i class="fas fa-download"></i></a>\
				<span class="badge badge-primary badge-pill">'+r.count.toString()+'</span></div>';
				jQuery('#list-country-'+c.locID).append(html)
			}
		})

	})

	country.forEach(function(c){
		jQuery.get("https://ebird.org/ws2.0/ref/region/list/subnational1/"+c.locID+"?fmt=json&key="+token.ebird,function(data){
			region.forEach(function(r){
				if (r.locID.split('-')[0] == c.locID){
					var d = data.find(d=> d.code ==r.locID)
					if (d ==undefined){
						jQuery('#locID-'+r.locID).html(c.name);
					}else{
						jQuery('#locID-'+r.locID).html(d.name);
					}
				}
			})
		})
	})




	/*list.forEach(function(l,id){
		html='<div class="list-group-item"><a href="#">'+l.Location+'</a><a href="#" class="rcl-download" id="rcl-download-'+id+'"><i class="fas fa-download" ></a></div>';
		jQuery('#list-region-'+l.region).append(html)
	})*/

	setTimeout(function(){




		jQuery('.list-crl-a').on('click', function() {
			jQuery('.fa-chevron', this)
			.toggleClass('fa-chevron-right')
			.toggleClass('fa-chevron-down');
		});
		jQuery('.rcl-download').on('click', function(e) {
			e.preventDefault();
			if (!jQuery(e.target).hasClass('fa-disabled')){
				if (jQuery(e.target).hasClass('rcl-download')){
					val = jQuery(e.target).attr('id').replace('rcl-download-','')
				} else {
					val = jQuery(e.target.parentElement).attr('id').replace('rcl-download-','')
				}
				jQuery(e.target).removeClass('fa-download').addClass('fa-spinner fa-spin');
				jQuery.get("https://ebird.org/ws2.0/ref/hotspot/"+val+"?fmt=json&key="+token.ebird,function(data){
					downloaded.push(val)
					jQuery(e.target).removeClass('fa-spinner fa-spin').addClass('fa-download fa-disabled');
					//jQuery(jQuery("[id^=list-region-"+val+"]")[0]).find('i').addClass('fa-disabled');
					jQuery(jQuery("[id^=list-country-"+val+"]")[0]).find('i').addClass('fa-disabled');
					var hlocid = hotspot.map( h => h.locId);
					data.forEach(function(d){
						if (hlocid.indexOf(d.locId)<0){
							h=d;
							var m = L.marker([parseFloat(d.lat), parseFloat(d.lng)],{
								icon:L.icon({
									iconUrl: "https://zoziologie.raphaelnussbaumer.com/wp-content/plugins/Merge2Hotspot/hotspot-icon-hotspot_small.png",
									iconAnchor: [12, 30],
									popupAnchor: [0, -12],
								})
							}).bindPopup("<a href='https://ebird.org/hotspot/"+d.locId+"' target='_blank'>"+d.locName+"</a>");
							m.locName = d.locName;
							m.locId=d.locId;
							h.m = m;
							makersHotspot.addLayer(m);
							hotspot.push(h);
						}
					})
					map.fitBounds(makersHotspot.getBounds(), {paddingTopLeft: [500, 0]});
				})
			}
		});
	},0)
	
}


