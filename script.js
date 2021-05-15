let card_back_player = document.querySelector('.card-back-player');
let carta_jogador = document.querySelector('.carta-jogador');
let card_back_maquina = document.querySelector('.card-back-maquina');
let carta_maquina = document.querySelector('.carta-maquina');
let cardJogador = document.querySelector('.card-jogador');
let cardMaquina = document.querySelector('.card-maquina');

let cartaMaquina;
let cartaJogador;
let cartas = [
	{
		nome: 'Creator',
		time: 'Team NV',
		raca: 'Protoss',
		pais: {
			paisImg: 'https://duckduckgo.com/i/35f25a64.png',
			paisAlt: 'Coreia do Sul',
		},
		icon: 'https://www.rankedftw.com/static/01c2f01/img/races/protoss.svg',
		imagem:
			'https://cdn.discordapp.com/attachments/828720741847400547/828720917018050570/Screenshot_2021-04-05_creator_jpg_JPEG_Image_1473_808_pixels_-_Scaled_97.png',
		atributos: {
			Ataque: 6,
			Defesa: 6,
			Tática: 6,
			Mentalidade: 4,
			'Game Sense': 6,
			Micro: 8,
		},
	},
	{
		nome: 'SoS',
		time: 'Team NV',
		raca: 'Protoss',
		pais: {
			paisImg: 'https://duckduckgo.com/i/35f25a64.png',
			paisAlt: 'Coreia do Sul',
		},
		icon: 'https://www.rankedftw.com/static/01c2f01/img/races/protoss.svg',
		imagem:
			'https://cdn.discordapp.com/attachments/828720741847400547/828720905697624145/Screenshot_2021-04-05_sos_jpg_JPEG_Image_1433_807_pixels_-_Scaled_97.png',
		atributos: {
			Ataque: 8,
			Defesa: 6,
			Tática: 10,
			Mentalidade: 10,
			'Game Sense': 6,
			Micro: 6,
		},
	},
	{
		nome: 'DRG',
		time: 'Team NV',
		raca: 'Zerg',
		pais: {
			paisImg: 'https://duckduckgo.com/i/35f25a64.png',
			paisAlt: 'Coreia do Sul',
		},
		icon: 'https://www.rankedftw.com/static/01c2f01/img/races/zerg.svg',
		imagem:
			'https://cdn.discordapp.com/attachments/828720741847400547/828720915416219688/Screenshot_2021-04-05_dongraegu_jpg_JPEG_Image_1454_791_pixels_-_Scaled_99.png',
		atributos: {
			Ataque: 8,
			Defesa: 6,
			Tática: 6,
			Mentalidade: 8,
			'Game Sense': 8,
			Micro: 4,
		},
	},
	{
		nome: 'Maru',
		time: 'Team NV',
		raca: 'Terran',
		pais: {
			paisImg: 'https://duckduckgo.com/i/35f25a64.png',
			paisAlt: 'Coreia do Sul',
		},
		icon: 'https://www.rankedftw.com/static/01c2f01/img/races/terran.svg',
		imagem:
			'https://cdn.discordapp.com/attachments/828720741847400547/828720909556121630/Screenshot_2021-04-05_maru_jpg_JPEG_Image_1435_806_pixels_-_Scaled_97.png',
		atributos: {
			Ataque: 10,
			Defesa: 10,
			Tática: 8,
			Mentalidade: 8,
			'Game Sense': 10,
			Micro: 10,
		},
	},
	{
		nome: 'Percival',
		time: 'Team NV',
		raca: 'Terran',
		pais: {
			paisImg: 'https://duckduckgo.com/i/35f25a64.png',
			paisAlt: 'Coreia do Sul',
		},
		icon: 'https://www.rankedftw.com/static/01c2f01/img/races/terran.svg',
		imagem:
			'https://cdn.discordapp.com/attachments/828720741847400547/828720912425287680/Screenshot_2021-04-05_percival_jpg_JPEG_Image_1440_806_pixels_-_Scaled_97.png',
		atributos: {
			Ataque: 8,
			Defesa: 6,
			Tática: 7,
			Mentalidade: 6,
			'Game Sense': 6,
			Micro: 7,
		},
	},
	{
		nome: 'Stats',
		time: 'Afreeca Freecs',
		raca: 'Protoss',
		pais: {
			paisImg: 'https://duckduckgo.com/i/35f25a64.png',
			paisAlt: 'Coreia do Sul',
		},
		icon: 'https://www.rankedftw.com/static/01c2f01/img/races/protoss.svg',
		imagem:
			'https://cdn.discordapp.com/attachments/828720741847400547/828722178382889040/Screenshot_2021-04-05_stats_jpg_JPEG_Image_1435_802_pixels_-_Scaled_98.png',
		atributos: {
			Ataque: 9,
			Defesa: 10,
			Tática: 7,
			Mentalidade: 8,
			'Game Sense': 10,
			Micro: 9,
		},
	},
	{
		nome: 'Armani',
		time: 'Afreeca Freecs',
		raca: 'Zerg',
		pais: {
			paisImg: 'https://duckduckgo.com/i/35f25a64.png',
			paisAlt: 'Coreia do Sul',
		},
		icon: 'https://www.rankedftw.com/static/01c2f01/img/races/zerg.svg',
		imagem:
			'https://cdn.discordapp.com/attachments/828720741847400547/828722180237426698/Screenshot_2021-04-05_armani_jpg_JPEG_Image_1428_799_pixels_-_Scaled_98.png',
		atributos: {
			Ataque: 6,
			Defesa: 7,
			Tática: 7,
			Mentalidade: 6,
			'Game Sense': 7,
			Micro: 6,
		},
	},
	{
		nome: 'Trap',
		time: 'Afreeca Freecs',
		raca: 'Protoss',
		pais: {
			paisImg: 'https://duckduckgo.com/i/35f25a64.png',
			paisAlt: 'Coreia do Sul',
		},
		icon: 'https://www.rankedftw.com/static/01c2f01/img/races/protoss.svg',
		imagem:
			'https://cdn.discordapp.com/attachments/828720741847400547/828722182389235763/Screenshot_2021-04-05_trap_jpg_JPEG_Image_1432_804_pixels_-_Scaled_97.png',
		atributos: {
			Ataque: 8,
			Defesa: 10,
			Tática: 8,
			Mentalidade: 6,
			'Game Sense': 10,
			Micro: 10,
		},
	},
	{
		nome: 'TY',
		time: 'Afreeca Freecs',
		raca: 'Terran',
		pais: {
			paisImg: 'https://duckduckgo.com/i/35f25a64.png',
			paisAlt: 'Coreia do Sul',
		},
		icon: 'https://www.rankedftw.com/static/01c2f01/img/races/terran.svg',
		imagem:
			'https://cdn.discordapp.com/attachments/828720741847400547/828722177187512330/Screenshot_2021-04-05_ty_jpg_JPEG_Image_1442_797_pixels_-_Scaled_98.png',
		atributos: {
			Ataque: 8,
			Defesa: 10,
			Tática: 8,
			Mentalidade: 8,
			'Game Sense': 10,
			Micro: 6,
		},
	},
	{
		nome: 'ByuN',
		time: 'Shopify Rebellion',
		raca: 'Terran',
		pais: {
			paisImg: 'https://duckduckgo.com/i/35f25a64.png',
			paisAlt: 'Coreia do Sul',
		},
		icon: 'https://www.rankedftw.com/static/01c2f01/img/races/terran.svg',
		imagem:
			'https://cdn.discordapp.com/attachments/828720741847400547/828720997783175178/Screenshot_2021-04-05_byun_jpg_JPEG_Image_1435_809_pixels_-_Scaled_97.png',
		atributos: {
			Ataque: 10,
			Defesa: 6,
			Tática: 8,
			Mentalidade: 6,
			'Game Sense': 8,
			Micro: 9,
		},
	},
	{
		nome: 'Lambo',
		time: 'Shopify Rebellion',
		raca: 'Zerg',
		pais: {
			paisImg: 'https://duckduckgo.com/i/912c9392.png',
			paisAlt: 'Alemanha',
		},
		icon: 'https://www.rankedftw.com/static/01c2f01/img/races/zerg.svg',
		imagem:
			'https://cdn.discordapp.com/attachments/828720741847400547/828720991382798337/Screenshot_2021-04-05_lambo_jpg_JPEG_Image_1438_797_pixels_-_Scaled_98.png',
		atributos: {
			Ataque: 8,
			Defesa: 4,
			Tática: 8,
			Mentalidade: 6,
			'Game Sense': 6,
			Micro: 6,
		},
	},
	{
		nome: 'Scarlett',
		time: 'Shopify Rebellion',
		raca: 'Zerg',
		pais: {
			paisImg: 'https://duckduckgo.com/i/42d29b63.png',
			paisAlt: 'Canadá',
		},
		icon: 'https://www.rankedftw.com/static/01c2f01/img/races/zerg.svg',
		imagem:
			'https://cdn.discordapp.com/attachments/828720741847400547/828720996701438002/Screenshot_2021-04-05_scarlett_jpg_JPEG_Image_1438_802_pixels_-_Scaled_98.png',
		atributos: {
			Ataque: 6,
			Defesa: 6,
			Tática: 8,
			Mentalidade: 8,
			'Game Sense': 4,
			Micro: 6,
		},
	},
	{
		nome: 'Clem',
		time: 'Team Liquid',
		raca: 'Terran',
		pais: {
			paisImg: 'https://duckduckgo.com/i/901a1c0a.png',
			paisAlt: 'França',
		},
		icon: 'https://www.rankedftw.com/static/01c2f01/img/races/terran.svg',
		imagem:
			'https://cdn.discordapp.com/attachments/828720741847400547/828762080219889684/Screenshot_2021-04-05_clem_jpg_JPEG_Image_1443_786_pixels_-_Scaled_99.png',
		atributos: {
			Ataque: 10,
			Defesa: 8,
			Tática: 6,
			Mentalidade: 8,
			'Game Sense': 8,
			Micro: 10,
		},
	},
	{
		nome: 'Harstem',
		time: 'Team Liquid',
		raca: 'Protoss',
		pais: {
			paisImg: 'https://duckduckgo.com/i/719588b1.png',
			paisAlt: 'Países Baixos',
		},
		icon: 'https://www.rankedftw.com/static/01c2f01/img/races/protoss.svg',
		imagem:
			'https://cdn.discordapp.com/attachments/828720741847400547/828762079871238144/Screenshot_2021-04-05_harstem_jpg_JPEG_Image_1443_805_pixels_-_Scaled_97.png',
		atributos: {
			Ataque: 6,
			Defesa: 6,
			Tática: 6,
			Mentalidade: 8,
			'Game Sense': 8,
			Micro: 6,
		},
	},
	{
		nome: 'MaNa',
		time: 'Team Liquid',
		raca: 'Protoss',
		pais: {
			paisImg: 'https://duckduckgo.com/i/8f6c042d.png',
			paisAlt: 'Polônia',
		},
		icon: 'https://www.rankedftw.com/static/01c2f01/img/races/protoss.svg',
		imagem:
			'https://cdn.discordapp.com/attachments/828720741847400547/828762079229378601/Screenshot_2021-04-05_mana_jpg_JPEG_Image_1441_803_pixels_-_Scaled_97.png',
		atributos: {
			Ataque: 6,
			Defesa: 6,
			Tática: 6,
			Mentalidade: 6,
			'Game Sense': 6,
			Micro: 6,
		},
	},
	{
		nome: 'Kelazhur',
		time: 'Team Liquid',
		raca: 'Terran',
		pais: {
			paisImg: 'https://duckduckgo.com/i/cb286b9b.png',
			paisAlt: 'Brasil',
		},
		icon: 'https://www.rankedftw.com/static/01c2f01/img/races/terran.svg',
		imagem:
			'https://cdn.discordapp.com/attachments/828720741847400547/828762077375102996/Screenshot_2021-04-05_Twitch.png',
		atributos: {
			Ataque: 7,
			Defesa: 6,
			Tática: 7,
			Mentalidade: 6,
			'Game Sense': 6,
			Micro: 7,
		},
	},
	{
		nome: 'Rogue',
		time: 'Dragon Phoenix Gaming',
		raca: 'Zerg',
		pais: {
			paisImg: 'https://duckduckgo.com/i/35f25a64.png',
			paisAlt: 'Coreia do Sul',
		},
		icon: 'https://www.rankedftw.com/static/01c2f01/img/races/zerg.svg',
		imagem:
			'https://cdn.discordapp.com/attachments/828720741847400547/828765177431588864/Screenshot_2021-04-05_rogue_jpg_JPEG_Image_1443_791_pixels_-_Scaled_99.png',
		atributos: {
			Ataque: 8,
			Defesa: 8,
			Tática: 10,
			Mentalidade: 8,
			'Game Sense': 10,
			Micro: 8,
		},
	},
	{
		nome: 'Zest',
		time: 'Dragon Phoenix Gaming',
		raca: 'Protoss',
		pais: {
			paisImg: 'https://duckduckgo.com/i/35f25a64.png',
			paisAlt: 'Coreia do Sul',
		},
		icon: 'https://www.rankedftw.com/static/01c2f01/img/races/protoss.svg',
		imagem:
			'https://cdn.discordapp.com/attachments/828720741847400547/828765177498304522/Screenshot_2021-04-05_zest_jpg_JPEG_Image_1440_808_pixels_-_Scaled_97.png',
		atributos: {
			Ataque: 10,
			Defesa: 8,
			Tática: 8,
			Mentalidade: 8,
			'Game Sense': 8,
			Micro: 10,
		},
	},
	{
		nome: 'Cure',
		time: 'Dragon Phoenix Gaming',
		raca: 'Terran',
		pais: {
			paisImg: 'https://duckduckgo.com/i/35f25a64.png',
			paisAlt: 'Coreia do Sul',
		},
		icon: 'https://www.rankedftw.com/static/01c2f01/img/races/terran.svg',
		imagem:
			'https://cdn.discordapp.com/attachments/828720741847400547/828765181831151636/Screenshot_2021-04-05_cure_jpg_JPEG_Image_1444_805_pixels_-_Scaled_97.png',
		atributos: {
			Ataque: 8,
			Defesa: 10,
			Tática: 8,
			Mentalidade: 8,
			'Game Sense': 10,
			Micro: 8,
		},
	},
	{
		nome: 'Dark',
		time: 'Dragon Phoenix Gaming',
		raca: 'Zerg',
		pais: {
			paisImg: 'https://duckduckgo.com/i/35f25a64.png',
			paisAlt: 'Coreia do Sul',
		},
		icon: 'https://www.rankedftw.com/static/01c2f01/img/races/zerg.svg',
		imagem:
			'https://cdn.discordapp.com/attachments/828720741847400547/828765191302545408/Screenshot_2021-04-05_Twitch1.png',
		atributos: {
			Ataque: 10,
			Defesa: 10,
			Tática: 8,
			Mentalidade: 8,
			'Game Sense': 10,
			Micro: 10,
		},
	},
	{
		nome: 'Astrea',
		time: 'Alpha X',
		raca: 'Protoss',
		pais: {
			paisImg: 'https://duckduckgo.com/i/65032114.png',
			paisAlt: 'Estados Unidos da América',
		},
		icon: 'https://www.rankedftw.com/static/01c2f01/img/races/protoss.svg',
		imagem:
			'https://cdn.discordapp.com/attachments/828720741847400547/828756662302015569/Screenshot_2021-04-05_astrea_jpg_JPEG_Image_1451_790_pixels_-_Scaled_99.png',
		atributos: {
			Ataque: 6,
			Defesa: 8,
			Tática: 6,
			Mentalidade: 6,
			'Game Sense': 8,
			Micro: 6,
		},
	},
	{
		nome: 'Nice',
		time: 'Alpha X',
		raca: 'Protoss',
		pais: {
			paisImg: 'https://duckduckgo.com/i/baca6fea.png',
			paisAlt: 'Taiwan',
		},
		icon: 'https://www.rankedftw.com/static/01c2f01/img/races/protoss.svg',
		imagem:
			'https://cdn.discordapp.com/attachments/828720741847400547/828756664119328808/Nice.png',
		atributos: {
			Ataque: 7,
			Defesa: 5,
			Tática: 7,
			Mentalidade: 7,
			'Game Sense': 5,
			Micro: 6,
		},
	},
	{
		nome: 'Zoun',
		time: 'Alpha X',
		raca: 'Protoss',
		pais: {
			paisImg: 'https://duckduckgo.com/i/35f25a64.png',
			paisAlt: 'Coreia do Sul',
		},
		icon: 'https://www.rankedftw.com/static/01c2f01/img/races/protoss.svg',
		imagem:
			'https://cdn.discordapp.com/attachments/828720741847400547/828756657286021130/Screenshot_2021-04-05_zoun_jpg_JPEG_Image_1451_801_pixels_-_Scaled_98.png',
		atributos: {
			Ataque: 8,
			Defesa: 6,
			Tática: 8,
			Mentalidade: 6,
			'Game Sense': 8,
			Micro: 6,
		},
	},
	{
		nome: 'RagnaroK',
		time: 'Alpha X',
		raca: 'Zerg',
		pais: {
			paisImg: 'https://duckduckgo.com/i/35f25a64.png',
			paisAlt: 'Coreia do Sul',
		},
		icon: 'https://www.rankedftw.com/static/01c2f01/img/races/zerg.svg',
		imagem:
			'https://cdn.discordapp.com/attachments/828720741847400547/828756658946965514/Screenshot_2021-04-05_ragnarok_jpg_JPEG_Image_1458_783_pixels_-_Scaled_98.png',
		atributos: {
			Ataque: 8,
			Defesa: 6,
			Tática: 8,
			Mentalidade: 6,
			'Game Sense': 6,
			Micro: 6,
		},
	},
	{
		nome: 'INnoVation',
		time: 'KaiZi Gaming',
		raca: 'Terran',
		pais: {
			paisImg: 'https://duckduckgo.com/i/35f25a64.png',
			paisAlt: 'Coreia do Sul',
		},
		icon: 'https://www.rankedftw.com/static/01c2f01/img/races/terran.svg',
		imagem:
			'https://cdn.discordapp.com/attachments/828720741847400547/828721486185103370/Screenshot_2021-04-05_innovation_jpg_JPEG_Image_1437_800_pixels_-_Scaled_98.png',
		atributos: {
			Ataque: 10,
			Defesa: 8,
			Tática: 8,
			Mentalidade: 10,
			'Game Sense': 8,
			Micro: 8,
		},
	},
	{
		nome: 'Solar',
		time: 'KaiZi Gaming',
		raca: 'Zerg',
		pais: {
			paisImg: 'https://duckduckgo.com/i/35f25a64.png',
			paisAlt: 'Coreia do Sul',
		},
		icon: 'https://www.rankedftw.com/static/01c2f01/img/races/zerg.svg',
		imagem:
			'https://cdn.discordapp.com/attachments/828720741847400547/828721485031014400/Screenshot_2021-04-05_solar_jpg_JPEG_Image_1443_800_pixels_-_Scaled_98.png',
		atributos: {
			Ataque: 10,
			Defesa: 8,
			Tática: 8,
			Mentalidade: 6,
			'Game Sense': 10,
			Micro: 8,
		},
	},
	{
		nome: 'TIME',
		time: 'KaiZi Gaming',
		raca: 'Terran',
		pais: {
			paisImg: 'https://duckduckgo.com/i/86271b84.png',
			paisAlt: 'China',
		},
		icon: 'https://www.rankedftw.com/static/01c2f01/img/races/terran.svg',
		imagem:
			'https://cdn.discordapp.com/attachments/828720741847400547/828721482892836954/Screenshot_2021-04-05_time_jpg_JPEG_Image_1439_804_pixels_-_Scaled_97.png',
		atributos: {
			Ataque: 8,
			Defesa: 6,
			Tática: 8,
			Mentalidade: 6,
			'Game Sense': 6,
			Micro: 8,
		},
	},
	{
		nome: 'Patience',
		time: 'Good Game Gaming',
		raca: 'Protoss',
		pais: {
			paisImg: 'https://duckduckgo.com/i/35f25a64.png',
			paisAlt: 'Coreia do Sul',
		},
		icon: 'https://www.rankedftw.com/static/01c2f01/img/races/protoss.svg',
		imagem:
			'https://cdn.discordapp.com/attachments/828720741847400547/828722707004260382/Screenshot_2021-04-05_patience_jpg_JPEG_Image_1443_794_pixels_-_Scaled_98.png',
		atributos: {
			Ataque: 6,
			Defesa: 8,
			Tática: 4,
			Mentalidade: 6,
			'Game Sense': 4,
			Micro: 8,
		},
	},
	{
		nome: 'Dream',
		time: 'Good Game Gaming',
		raca: 'Terran',
		pais: {
			paisImg: 'https://duckduckgo.com/i/35f25a64.png',
			paisAlt: 'Coreia do Sul',
		},
		icon: 'https://www.rankedftw.com/static/01c2f01/img/races/terran.svg',
		imagem:
			'https://cdn.discordapp.com/attachments/828720741847400547/828722714302611456/Screenshot_2021-04-05_dream_jpg_JPEG_Image_1462_828_pixels_-_Scaled_94.png',
		atributos: {
			Ataque: 8,
			Defesa: 8,
			Tática: 6,
			Mentalidade: 6,
			'Game Sense': 8,
			Micro: 8,
		},
	},
	{
		nome: 'Cyan',
		time: 'Good Game Gaming',
		raca: 'Protoss',
		pais: {
			paisImg: 'https://duckduckgo.com/i/86271b84.png',
			paisAlt: 'China',
		},
		icon: 'https://www.rankedftw.com/static/01c2f01/img/races/protoss.svg',
		imagem:
			'https://cdn.discordapp.com/attachments/828720741847400547/828722707767623721/Screenshot_2021-04-05_cyan_jpg_JPEG_Image_1443_790_pixels_-_Scaled_99.png',
		atributos: {
			Ataque: 6,
			Defesa: 8,
			Tática: 6,
			Mentalidade: 4,
			'Game Sense': 4,
			Micro: 6,
		},
	},
	{
		nome: 'Cham',
		time: 'Team eXoN',
		raca: 'Zerg',
		pais: {
			paisImg: 'https://duckduckgo.com/i/5d875af6.png',
			paisAlt: 'México',
		},
		icon: 'https://www.rankedftw.com/static/01c2f01/img/races/zerg.svg',
		imagem:
			'https://cdn.discordapp.com/attachments/828720741847400547/828761520334569562/Screenshot_2021-04-05_cham_jpg_JPEG_Image_1441_793_pixels_-_Scaled_99.png',
		atributos: {
			Ataque: 6,
			Defesa: 6,
			Tática: 6,
			Mentalidade: 6,
			'Game Sense': 4,
			Micro: 6,
		},
	},
	{
		nome: 'SpeCial',
		time: 'Team eXoN',
		raca: 'Terran',
		pais: {
			paisImg: 'https://duckduckgo.com/i/5d875af6.png',
			paisAlt: 'México',
		},
		icon: 'https://www.rankedftw.com/static/01c2f01/img/races/terran.svg',
		imagem:
			'https://cdn.discordapp.com/attachments/828720741847400547/828761518698790912/Screenshot_2021-04-05_special_jpg_JPEG_Image_1440_793_pixels_-_Scaled_99.png',
		atributos: {
			Ataque: 8,
			Defesa: 6,
			Tática: 8,
			Mentalidade: 8,
			'Game Sense': 8,
			Micro: 8,
		},
	},
	{
		nome: 'XY',
		time: 'Invictus Gaming',
		raca: 'Terran',
		pais: {
			paisImg: 'https://duckduckgo.com/i/86271b84.png',
			paisAlt: 'China',
		},
		icon: 'https://www.rankedftw.com/static/01c2f01/img/races/terran.svg',
		imagem:
			'https://cdn.discordapp.com/attachments/828720741847400547/828768004653056020/Screenshot_2021-04-05_xy_jpg_JPEG_Image_1455_787_pixels_-_Scaled_98.png',
		atributos: {
			Ataque: 2,
			Defesa: 6,
			Tática: 4,
			Mentalidade: 10,
			'Game Sense': 6,
			Micro: 2,
		},
	},
	{
		nome: 'MacSed',
		time: 'Invictus Gaming',
		raca: 'Protoss',
		pais: {
			paisImg: 'https://duckduckgo.com/i/86271b84.png',
			paisAlt: 'China',
		},
		icon: 'https://www.rankedftw.com/static/01c2f01/img/races/protoss.svg',
		imagem:
			'https://cdn.discordapp.com/attachments/828720741847400547/828767998500143124/Screenshot_2021-04-05_macsed_jpg_JPEG_Image_1521_809_pixels_-_Scaled_94.png',
		atributos: {
			Ataque: 4,
			Defesa: 8,
			Tática: 6,
			Mentalidade: 6,
			'Game Sense': 6,
			Micro: 4,
		},
	},
	{
		nome: 'Coffee',
		time: 'Invictus Gaming',
		raca: 'Terran',
		pais: {
			paisImg: 'https://duckduckgo.com/i/86271b84.png',
			paisAlt: 'China',
		},
		icon: 'https://www.rankedftw.com/static/01c2f01/img/races/terran.svg',
		imagem:
			'https://cdn.discordapp.com/attachments/828720741847400547/828767995202895942/Screenshot_2021-04-05_coffee_jpg_JPEG_Image_1436_801_pixels_-_Scaled_98.png',
		atributos: {
			Ataque: 8,
			Defesa: 4,
			Tática: 6,
			Mentalidade: 2,
			'Game Sense': 4,
			Micro: 8,
		},
	},
	{
		nome: 'Alka',
		time: 'Team LaoPaoer',
		raca: 'Protoss',
		pais: {
			paisImg: 'https://duckduckgo.com/i/86271b84.png',
			paisAlt: 'China',
		},
		icon: 'https://www.rankedftw.com/static/01c2f01/img/races/protoss.svg',
		imagem:
			'https://cdn.discordapp.com/attachments/828720741847400547/828771613910368337/Screenshot_2021-04-05_alka_jpg_JPEG_Image_1432_804_pixels_-_Scaled_97.png',
		atributos: {
			Ataque: 4,
			Defesa: 4,
			Tática: 4,
			Mentalidade: 4,
			'Game Sense': 4,
			Micro: 4,
		},
	},
	{
		nome: 'Jieshi',
		time: 'Team LaoPaoer',
		raca: 'Protoss',
		pais: {
			paisImg: 'https://duckduckgo.com/i/86271b84.png',
			paisAlt: 'China',
		},
		icon: 'https://www.rankedftw.com/static/01c2f01/img/races/protoss.svg',
		imagem:
			'https://cdn.discordapp.com/attachments/828720741847400547/828771610378502144/Screenshot_2021-04-05_jieshi_jpg_JPEG_Image_1435_793_pixels_-_Scaled_99.png',
		atributos: {
			Ataque: 8,
			Defesa: 4,
			Tática: 6,
			Mentalidade: 6,
			'Game Sense': 4,
			Micro: 6,
		},
	},
	{
		nome: 'Wanted',
		time: 'Team LaoPaoer',
		raca: 'Protoss',
		pais: {
			paisImg: 'https://duckduckgo.com/i/86271b84.png',
			paisAlt: 'China',
		},
		icon: 'https://www.rankedftw.com/static/01c2f01/img/races/zerg.svg',
		imagem:
			'https://cdn.discordapp.com/attachments/828720741847400547/828771607328587776/Screenshot_2021-04-05_wanted_jpg_JPEG_Image_1435_800_pixels_-_Scaled_98.png',
		atributos: {
			Ataque: 4,
			Defesa: 4,
			Tática: 4,
			Mentalidade: 4,
			'Game Sense': 6,
			Micro: 6,
		},
	},
	{
		nome: 'NaTuRal',
		time: 'Team GP',
		raca: 'Terran',
		pais: {
			paisImg: 'https://duckduckgo.com/i/35f25a64.png',
			paisAlt: 'Coreia do Sul',
		},
		icon: 'https://www.rankedftw.com/static/01c2f01/img/races/terran.svg',
		imagem:
			'https://cdn.discordapp.com/attachments/828720741847400547/828775257635815434/NaTuRal.png',
		atributos: {
			Ataque: 6,
			Defesa: 5,
			Tática: 5,
			Mentalidade: 6,
			'Game Sense': 6,
			Micro: 5,
		},
	},
	{
		nome: 'Ryung',
		time: 'Team GP',
		raca: 'Terran',
		pais: {
			paisImg: 'https://duckduckgo.com/i/35f25a64.png',
			paisAlt: 'Coreia do Sul',
		},
		icon: 'https://www.rankedftw.com/static/01c2f01/img/races/terran.svg',
		imagem:
			'https://cdn.discordapp.com/attachments/828720741847400547/828775256121409606/Screenshot_2021-04-05_ryung_jpg_JPEG_Image_1447_708_pixels_-_Scaled_991.png',
		atributos: {
			Ataque: 8,
			Defesa: 8,
			Tática: 4,
			Mentalidade: 6,
			'Game Sense': 6,
			Micro: 4,
		},
	},
	{
		nome: 'Prince',
		time: 'Team GP',
		raca: 'Protoss',
		pais: {
			paisImg: 'https://duckduckgo.com/i/35f25a64.png',
			paisAlt: 'Coreia do Sul',
		},
		icon: 'https://www.rankedftw.com/static/01c2f01/img/races/protoss.svg',
		imagem:
			'https://cdn.discordapp.com/attachments/828720741847400547/828775256755666944/Prince.png',
		atributos: {
			Ataque: 7,
			Defesa: 5,
			Tática: 8,
			Mentalidade: 6,
			'Game Sense': 5,
			Micro: 5,
		},
	},
	{
		nome: 'Puzzle',
		time: 'Team GP',
		raca: 'Protoss',
		pais: {
			paisImg: 'https://duckduckgo.com/i/35f25a64.png',
			paisAlt: 'Coreia do Sul',
		},
		icon: 'https://www.rankedftw.com/static/01c2f01/img/races/protoss.svg',
		imagem:
			'https://cdn.discordapp.com/attachments/828720741847400547/828776959009488946/Screenshot_2021-04-05_puzzle_jpg_JPEG_Image_1454_805_pixels_-_Scaled_97.png',
		atributos: {
			Ataque: 8,
			Defesa: 6,
			Tática: 4,
			Mentalidade: 6,
			'Game Sense': 4,
			Micro: 6,
		},
	},
];

/*
  {
    nome: "",
    time: "",
    raca: "",
    pais: "",
	icon: "",
    imagem: "",
    atributos: {
      Ataque: ,
      Defesa: ,
      Tática: ,
      Mentalidade: ,
      "Game Sense": ,
      Micro: 
    }
  }
*/

let pontosJogador = 0;
let pontosMaquina = 0;

/* Atenção aqui: */

// Como embaralhar arrays!!!!
function embaralhar(arr) {
	arr.sort(() => parseInt(Math.random() * arr.length - arr.length / 2));
}

embaralhar(cartas);
console.log(cartas.length);

cartas.splice(32, cartas.length);
console.log(cartas.length);

let arrCartasJogador = [];

let metade = cartas.length / 2;

for (let i = 0; i < metade; i++) {
	let numeroCarta = parseInt(Math.random() * cartas.length);
	arrCartasJogador.push(cartas[numeroCarta]);
	cartas.splice(numeroCarta, 1);

	// console.log('i', i);
	// console.log('numeroCarta', numeroCarta);
	// console.log('arrCartasJogador', arrCartasJogador);
	// console.log('cartas', cartas);
}

let arrCartasMaquina = cartas;

/* Fim da edição
 */

atualizaPlacar();
atualizaQuantidadeDeCartas();

function atualizaQuantidadeDeCartas() {
	let divQuantidadeCartasJogador = document.querySelector('.cartas-jogador');
	let divQuantidadeCartasMaquina = document.querySelector('.cartas-maquina');
	// let html = 'Quantidade de cartas no jogo: ' + cartas.length;
	let cartasJogador =
		`<p>Sua quantidade de cartas no jogo: ` +
		arrCartasJogador.length +
		`</p>`;

	let cartasMaquina =
		`<p>Quantidade de cartas do computador: ` +
		arrCartasMaquina.length +
		`</p>`;

	divQuantidadeCartasJogador.innerHTML = cartasJogador;
	divQuantidadeCartasMaquina.innerHTML = cartasMaquina;
}

function atualizaPlacar() {
	let divPlacar = document.querySelector('.placar');
	let html = 'Jogador ' + pontosJogador + ' / ' + pontosMaquina + ' Máquina';

	divPlacar.innerHTML = html;
}

function sortearCarta() {
	// let numeroCartaMaquina = parseInt(Math.random() * cartas.length);
	// cartaMaquina = cartas[numeroCartaMaquina];
	// cartas.splice(numeroCartaMaquina, 1);

	// let numeroCartaJogador = parseInt(Math.random() * cartas.length);
	// cartaJogador = cartas[numeroCartaJogador];
	// cartas.splice(numeroCartaJogador, 1);

	let numeroCartaMaquina = parseInt(Math.random() * arrCartasMaquina.length);
	cartaMaquina = arrCartasMaquina[numeroCartaMaquina];

	let numeroCartaJogador = parseInt(Math.random() * arrCartasJogador.length);
	cartaJogador = arrCartasJogador[numeroCartaJogador];

	document.getElementById('btnSortear').disabled = true;
	/*
  	document.getElementById("btnJogar").disabled = false;
  	*/

	// let cardJogador = document.querySelector('.card-jogador');

	exibeCartaJogador();

	/* Declarada no escopo global:
 	 let card_back_player = document.querySelector(".card-back-player");
  	let carta_jogador = document.querySelector(".carta-jogador");
 	 */

	card_back_player.style.display = 'none';
	carta_jogador.style.display = 'flex';
}

function exibeCartaJogador() {
	let nome = document.querySelector('.player');
	nome.textContent = cartaJogador.nome;
	let imgCartaJogador = document.querySelector('.img-carta-jogador');
	imgCartaJogador.src = cartaJogador.imagem;
	imgCartaJogador.alt = 'Jogador ' + cartaJogador.nome;
	let time = document.querySelector('.time');
	time.textContent = cartaJogador.time;
	let raca = document.querySelector('.raca');
	raca.textContent = cartaJogador.raca;
	let pais = document.querySelector('.pais');
	pais.src = cartaJogador.pais.paisImg;
	pais.alt = 'País: ' + cartaJogador.pais.paisAlt;
	let icon = document.querySelector('.icon');
	icon.src = cartaJogador.icon;
	icon.alt = 'Logo da raça escolhida pelo jogador: ' + cartaJogador.raca;

	var opcoesTexto = '';

	for (var atributo in cartaJogador.atributos) {
		opcoesTexto +=
			"<div><input type='radio' name='atributo' onClick='ativarBotaoJogar()' value='" +
			atributo +
			"'>" +
			atributo +
			' ' +
			cartaJogador.atributos[atributo] +
			'</div>';
	}

	let areaAtributos = document.querySelector('.area-atributos');
	areaAtributos.innerHTML = opcoesTexto;

	cardJogador.classList.toggle('flip');
}

function obtemAtributoSelecionado() {
	var radioAtributo = document.getElementsByName('atributo');

	for (var i = 0; i < radioAtributo.length; i++) {
		if (radioAtributo[i].checked) {
			return radioAtributo[i].value;
		}
	}
}

function ativarBotaoJogar() {
	document.getElementById('btnJogar').disabled = false;
}

function jogar() {
	var atributoSelecionado = obtemAtributoSelecionado();
	var divResultado = document.getElementById('resultado');
	let btnRodada = document.getElementById('btnJogar');

	let indexCartaMaquina = arrCartasMaquina.indexOf(cartaMaquina);
	let indexCartaJogador = arrCartasJogador.indexOf(cartaJogador);

	if (
		cartaJogador.atributos[atributoSelecionado] >
		cartaMaquina.atributos[atributoSelecionado]
	) {
		htmlResultado = '<p class="resultado-final">Venceu!</p>';
		pontosJogador++;
		arrCartasJogador.push(cartaMaquina);
		arrCartasMaquina.splice(indexCartaMaquina, 1);
		embaralhar(arrCartasJogador);
	} else if (
		cartaJogador.atributos[atributoSelecionado] <
		cartaMaquina.atributos[atributoSelecionado]
	) {
		htmlResultado = '<p class="resultado-final">Perdeu :(</p>';
		pontosMaquina++;
		arrCartasMaquina.push(cartaJogador);
		arrCartasJogador.splice(indexCartaJogador, 1);
		embaralhar(arrCartasMaquina);
	} else {
		htmlResultado = '<p class="resultado-final">Empatou!</p>';
		embaralhar(arrCartasJogador);
		embaralhar(arrCartasMaquina);
	}

	// console.log('arrCartasJogador', arrCartasJogador.map( o => o.nome ));
	// console.log('arrCartasMaquina', arrCartasMaquina.map( o => o.nome ));

	/*
  let fimDeJogo = document.querySelector("wrapper");
  */

	// if (cartas.length == 0) {
	// 	alert('Fim de jogo');
	// 	btnRodada.disabled = true;
	// 	if (pontosJogador > pontosMaquina) {
	// 		htmlResultado =
	// 			'<p class="resultado-final">Parabéns! :D <br> Você venceu!</p>';
	// 	} else if (pontosJogador < pontosMaquina) {
	// 		htmlResultado = '<p class="resultado-final">Você perdeu ☹</p>';
	// 	} else {
	// 		htmlResultado = '<p class="resultado-final">Empate!</p>';
	// 	}
	// }
	if (arrCartasMaquina == 0) {
		htmlResultado =
			'<p class="resultado-final">Parabéns! :D <br> Você venceu!</p>';
		btnRodada.disabled = true;
	} else if (arrCartasJogador == 0) {
		htmlResultado = '<p class="resultado-final">Você perdeu ☹</p>';
		btnRodada.disabled = true;
	} else {
		document.getElementById('btnProximaRodada').disabled = false;
	}

	divResultado.innerHTML = htmlResultado;

	btnRodada.textContent = 'Próxima rodada';

	// let cardMaquina = document.querySelector('.card-maquina');

	if (btnRodada.textContent === 'Próxima rodada') {
		// btnProximaRodada.addEventListener('click', proximaRodada())
		btnRodada.setAttribute('onclick', 'proximaRodada()');
	} else {
		btnRodada.setAttribute('onclick', 'jogar()');
	}

	/*
  document.getElementById("btnJogar").disabled = true;
  document.getElementById("btnProximaRodada").disabled = false;
  */
	atualizaPlacar();

	exibeCartaMaquina();
	atualizaQuantidadeDeCartas();

	/* Declarada no escopo global:
  let card_back_maquina = document.querySelector(".card-back-maquina");
  let carta_maquina = document.querySelector(".carta-maquina");
  */

	card_back_maquina.style.display = 'none';
	carta_maquina.style.display = 'flex';
}

function exibeCartaMaquina() {
	let nomeMaq = document.querySelector('.player-maq');
	nomeMaq.textContent = cartaMaquina.nome;

	let imgCartaMaquina = document.querySelector('.img-carta-maquina');
	imgCartaMaquina.src = cartaMaquina.imagem;
	imgCartaMaquina.alt = 'Jogador ' + cartaMaquina.nome;
	let timeMaq = document.querySelector('.time-maq');
	timeMaq.textContent = cartaMaquina.time;
	let racaMaq = document.querySelector('.raca-maq');
	racaMaq.textContent = cartaMaquina.raca;
	let paisMaq = document.querySelector('.pais-maq');
	paisMaq.src = cartaMaquina.pais.paisImg;
	paisMaq.alt = 'País: ' + cartaMaquina.pais.paisAlt;
	let iconMaq = document.querySelector('.icon-maq');
	iconMaq.src = cartaMaquina.icon;
	iconMaq.alt = 'Logo da raça escolhida pelo jogador: ' + cartaMaquina.raca;

	var opcoesTexto = '';

	for (var atributo in cartaMaquina.atributos) {
		opcoesTexto +=
			'<div><p>' +
			atributo +
			' ' +
			cartaMaquina.atributos[atributo] +
			'</p></div>';
	}

	let areaAtributosMaq = document.querySelector('.area-atributos-maq');
	areaAtributosMaq.innerHTML = opcoesTexto;

	cardMaquina.classList.add('flip');
}

function proximaRodada() {
	card_back_player.style.display = 'flex';
	carta_jogador.style.display = 'none';
	card_back_maquina.style.display = 'flex';
	carta_maquina.style.display = 'none';

	document.getElementById('btnSortear').disabled = false;

	document.getElementById('btnJogar').disabled = true;
	document.getElementById('btnProximaRodada').disabled = true;

	var divResultado = document.getElementById('resultado');
	divResultado.innerHTML = '';
	let btnJogar = document.querySelector('.button-jogar');
	btnJogar.textContent = 'Jogar';
	btnJogar.setAttribute('onclick', 'jogar()');

	cardJogador.classList.remove('flip');
	cardMaquina.classList.remove('flip');
}
