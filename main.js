(() => {
	/** メッセージ */
	const messages = {
		'confirm-clear': {
			ja: 'データをリセットします。よろしいですか？',
			en: 'The data will be initialized. Is it OK?',
		},
		congrats: {
			ja: 'コンプリートおめでとうございます！！',
			en: 'Congratulations!!',
		},
	};

	/** Navigatorの言語 */
	const navigatorLang = navigator.language || navigator.userLanguage || 'ja';

	/** タッチイベントがあるか */
	var hasTapEvent = (function(){
		var div = document.createElement('div');
		div.setAttribute('ontouchstart', 'return');
		return (typeof div.ontouchstart === 'function');
	})();
	
	const EVENT_CLICK = (hasTapEvent) ? 'touchstart' : 'click';

	/** 言語 */
	const lang = (navigatorLang.indexOf('ja') > -1) ? 'ja' : 'en';

	/** getMessage(key)
	 * メッセージを言語によって取り出す。
	 */
	const getMessage = (key) => messages[key][lang];

	/** 画像ファイルが置いてあるディレクトリの場所 */
	const weaponsDirectory = 'https://gungeespla.github.io/salmon_learn/data/weapons_big/';

	/** ブキのデフォルト画像サイズ */
	const defaultWeaponSize = 180;

	/** 保存できるスタックの最大数 */
	const stackLengthMax = 100;

	/** ブキタイプ配列 */
	// const weaponsTypes = ['shooters', 'blasters', 'rollers', 'chargers', 'sloshers', 'splatlings', 'dualies', 'brellas', 'grizzcos'];

	/** ブキデータ */
	const weapons = {
		0: {
			ja: 'ボールドマーカー', en: 'Sploosh-o-matic', type: 'shooters', bottom: 44,
		},
		10: {
			ja: 'わかばシューター', en: 'Splattershot Jr.', type: 'shooters', bottom: 33,
		},
		20: {
			ja: 'シャープマーカー', en: 'Splash-o-matic', type: 'shooters', bottom: 46,
		},
		30: {
			ja: 'プロモデラーMG', en: 'Aerospray MG', type: 'shooters', bottom: 24,
		},
		40: {
			ja: 'スプラシューター', en: 'Splattershot', type: 'shooters', bottom: 36,
		},
		50: {
			ja: '.52ガロン', en: '.52 Gal', type: 'shooters', bottom: 39,
		},
		60: {
			ja: 'N-ZAP85', en: "N-ZAP '85", type: 'shooters', bottom: 47,
		},
		70: {
			ja: 'プライムシューター', en: 'Splattershot Pro', type: 'shooters', bottom: 56,
		},
		80: {
			ja: '.96ガロン', en: '.96 Gal', type: 'shooters', bottom: 39,
		},
		90: {
			ja: 'ジェットスイーパー', en: 'Jet Squelcher', type: 'shooters', bottom: 50,
		},
		200: {
			ja: 'ノヴァブラスター', en: 'Luna Blaster', type: 'blasters', bottom: 33,
		},
		210: {
			ja: 'ホットブラスター', en: 'Blaster', type: 'blasters', bottom: 49,
		},
		220: {
			ja: 'ロングブラスター', en: 'Range Blaster', type: 'blasters', bottom: 47,
		},
		230: {
			ja: 'クラッシュブラスター', en: 'Clash Blaster', type: 'blasters', bottom: 25,
		},
		240: {
			ja: 'ラピッドブラスター', en: 'Rapid Blaster', type: 'blasters', bottom: 44,
		},
		250: {
			ja: 'Rブラスターエリート', en: 'Rapid Blaster Pro', type: 'blasters', bottom: 37,
		},
		300: {
			ja: 'L3リールガン', en: 'L-3 Nozzlenose', type: 'shooters', bottom: 42,
		},
		310: {
			ja: 'H3リールガン', en: 'H-3 Nozzlenose', type: 'shooters', bottom: 44,
		},
		400: {
			ja: 'ボトルガイザー', en: 'Squeezer', type: 'shooters', bottom: 44,
		},
		1000: {
			ja: 'カーボンローラー', en: 'Carbon Roller', type: 'rollers', bottom: 20,
		},
		1010: {
			ja: 'スプラローラー', en: 'Splat Roller', type: 'rollers', bottom: 17,
		},
		1020: {
			ja: 'ダイナモローラー', en: 'Dynamo Roller', type: 'rollers', bottom: 6,
		},
		1030: {
			ja: 'ヴァリアブルローラー', en: 'Flingza Roller', type: 'rollers', bottom: 9,
		},
		1100: {
			ja: 'パブロ', en: 'Inkbrush', type: 'rollers', bottom: 4,
		},
		1110: {
			ja: 'ホクサイ', en: 'Octobrush', type: 'rollers', bottom: 4,
		},
		2000: {
			ja: 'スクイックリンα', en: 'Classic Squiffer', type: 'chargers', bottom: 56,
		},
		2010: {
			ja: 'スプラチャージャー', en: 'Splat Charger', type: 'chargers', bottom: 60,
		},
		2020: {
			ja: 'スプラスコープ', en: 'Splatterscope', type: 'chargers', bottom: 60,
		},
		2030: {
			ja: 'リッター4K', en: 'E-liter 4K', type: 'chargers', bottom: 61,
		},
		2040: {
			ja: '4Kスコープ', en: 'E-liter 4K Scope', type: 'chargers', bottom: 61,
		},
		2050: {
			ja: '14式竹筒銃・甲', en: 'Bamboozler 14 Mk I', type: 'chargers', bottom: 53,
		},
		2060: {
			ja: 'ソイチューバー', en: 'Goo Tuber', type: 'chargers', bottom: 30,
		},
		3000: {
			ja: 'バケットスロッシャー', en: 'Slosher', type: 'sloshers', bottom: 19,
		},
		3010: {
			ja: 'ヒッセン', en: 'Tri-Slosher', type: 'sloshers', bottom: 32,
		},
		3020: {
			ja: 'スクリュースロッシャー', en: 'Sloshing Machine', type: 'sloshers', bottom: 17,
		},
		3030: {
			ja: 'オーバーフロッシャー', en: 'Bloblobber', type: 'sloshers', bottom: 35,
		},
		3040: {
			ja: 'エクスプロッシャー', en: 'Explosher', type: 'sloshers', bottom: 22,
		},
		4000: {
			ja: 'スプラスピナー', en: 'Mini Splatling', type: 'splatlings', bottom: 44,
		},
		4010: {
			ja: 'バレルスピナー', en: 'Heavy Splatling', type: 'splatlings', bottom: 46,
		},
		4020: {
			ja: 'ハイドラント', en: 'Hydra Splatling', type: 'splatlings', bottom: 32,
		},
		4030: {
			ja: 'クーゲルシュライバー', en: 'Ballpoint Splatling', type: 'splatlings', bottom: 50,
		},
		4040: {
			ja: 'ノーチラス47', en: 'Nautilus 47', type: 'splatlings', bottom: 50,
		},
		5000: {
			ja: 'スパッタリー', en: 'Dapple Dualies', type: 'dualies', bottom: 23,
		},
		5010: {
			ja: 'スプラマニューバー', en: 'Splat Dualies', type: 'dualies', bottom: 4,
		},
		5020: {
			ja: 'ケルビン525', en: 'Glooga Dualies', type: 'dualies', bottom: 11,
		},
		5030: {
			ja: 'デュアルスイーパー', en: 'Dualie Squelchers', type: 'dualies', bottom: 8,
		},
		5040: {
			ja: 'クアッドホッパーブラック', en: 'Dark Tetra Dualies', type: 'dualies', bottom: 6,
		},
		6000: {
			ja: 'パラシェルター', en: 'Splat Brella', type: 'brellas', bottom: 22,
		},
		6010: {
			ja: 'キャンピングシェルター', en: 'Tenta Brella', type: 'brellas', bottom: 8,
		},
		6020: {
			ja: 'スパイガジェット', en: 'Undercover Brella', type: 'brellas', bottom: 27,
		},
		7000: {
			ja: 'クマサン印のブラスター', en: 'Grizzco Blaster', type: 'grizzcos', bottom: 34,
		},
		7010: {
			ja: 'クマサン印のシェルター', en: 'Grizzco Brella', type: 'grizzcos', bottom: 12,
		},
		7020: {
			ja: 'クマサン印のチャージャー', en: 'Grizzco Charger', type: 'grizzcos', bottom: 50,
		},
		7030: {
			ja: 'クマサン印のスロッシャー', en: 'Grizzco Slosher', type: 'grizzcos', bottom: 6,
		},
	};

	/** ブキID配列 */
	const weaponIds = Object.keys(weapons);

	/** カウントスタック */
	let countStack = [];

	/** アンドゥスタック */
	let undoStack = [];

	/** カウントデータ */
	let counts = null;

	/** コンプした？ */
	let isComplete = false;

	/** クマブキオプション */
	let grizzcoVisibleOption = 7000;

	/** 増加オプション */
	let increaseOption = true;

	/** ローカルストレージのキー */
	const storageKey = 'collection-of-weapons';

	/** テーマ */
	let themeOption = 'light';

	/** getWindowWidth()
	 * 画面の横幅を取得する。
	 */
	const getWindowWidth = () => window.innerWidth
		|| (document.body ? document.body.clientWidth : false)
		|| document.documentElement.clientWidth;

	/** save()
	 * ローカルストレージにデータを保存する。
	 */
	const save = () => {
		const saveDataObj = {
			counts,
			undoStack,
			countStack,
			isComplete,
			increaseOption,
			grizzcoVisibleOption,
			themeOption
		};
		const jsonStr = JSON.stringify(saveDataObj);
		localStorage.setItem(storageKey, jsonStr);
	};

	/** load()
	 * ローカルストレージからデータを持ってくる。
	 */
	const load = () => {
		const jsonStr = localStorage.getItem(storageKey);
		if (jsonStr !== null) {
			const saveDataObj = JSON.parse(jsonStr);
			if ('counts' in saveDataObj) counts = saveDataObj.counts;
			if ('undoStack' in saveDataObj) undoStack = saveDataObj.undoStack;
			if ('countStack' in saveDataObj) countStack = saveDataObj.countStack;
			if ('isComplete' in saveDataObj) isComplete = saveDataObj.isComplete;
			if ('increaseOption' in saveDataObj) increaseOption = saveDataObj.increaseOption;
			if ('grizzcoVisibleOption' in saveDataObj) grizzcoVisibleOption = saveDataObj.grizzcoVisibleOption;
			if ('themeOption' in saveDataObj) themeOption = saveDataObj.themeOption;
			document.getElementById('theme-select').value = themeOption;
			document.getElementById('grizzco-select').value = grizzcoVisibleOption;
			document.getElementById('increase-select').value = increaseOption ? '1' : '0';
		}
	};

	/** checkComplete()
	 * コンプリート状況を確認する。
	 */
	const checkComplete = () => {
		for (let i = 0; i < weaponIds.length; i += 1) {
			const id = weaponIds[i];
			if (id < 7000) {
				if (counts[id] < 1) {
					return false;
				}
			}
		}
		if (grizzcoVisibleOption < 7040) {
			if (counts[grizzcoVisibleOption] < 1) {
				return false;
			}
		} else {
			for (let id = 7000; id < 7040; id += 10) {
				if (counts[id] < 1) {
					return false;
				}
			}
		}
		return true;
	};

	/** clear()
	 * データを消去する。
	 */
	const clear = () => {
		const isOK = window.confirm(getMessage('confirm-clear'));
		if (isOK) {
			weaponIds.forEach((id) => {
				counts[id] = 0;
				update(id);
			});
			undoStack = [];
			countStack = [];
			isComplete = false;
			localStorage.removeItem(storageKey);
		}
	};

	/** count()
	 * カウントする。<img>要素に取り付けられるイベントハンドラ。
	 * this: <img weapon-id="hogehoge">
	 */
	const count = function count() {
		const id = this.getAttribute('weapon-id');
		let delta = 1;
		if (!increaseOption && counts[id] > 0) {
			delta = -1;
		}
		counts[id] += delta;
		countStack.push({ id, delta });
		if (countStack.length > stackLengthMax) {
			countStack.shift();
		}
		undoStack = [];
		update(id);
	};

	/** countminus()
	 */
	const countminus = function countminus() {
		const id = this.getAttribute('weapon-id');
		if (counts[id] > 0) {
			let delta = -1;
			counts[id] += delta;
			countStack.push({ id, delta });
			if (countStack.length > stackLengthMax) {
				countStack.shift();
			}
			undoStack = [];
			update(id);
		}
	};

	/** undo()
	 * 一手戻す。
	 */
	const undo = () => {
		if (countStack.length > 0) {
			const stack = countStack.pop();
			counts[stack.id] -= stack.delta;
			undoStack.push(stack);
			if (undoStack.length > stackLengthMax) {
				undoStack.shift();
			}
			update(stack.id);
		}
	};

	/** redo()
	 * 一手戻したのを進め直す。
	 */
	const redo = () => {
		if (undoStack.length > 0) {
			const stack = undoStack.pop();
			counts[stack.id] += stack.delta;
			countStack.push(stack);
			if (countStack.length > stackLengthMax) {
				countStack.shift();
			}
			update(stack.id);
		}
	};

	/** update(id, isIgnoredComplete)
	 * ブキを更新する。
	 */
	const update = (id, isIgnoredComplete) => {
		const countElm = document.getElementById(`weapon-count-${id}`);
		countElm.textContent = counts[id];
		countElm.classList.remove('count-animation');
		setTimeout(() => {
			countElm.classList.add('count-animation');
		}, 16);
		const weaponElm = document.getElementById(`weapon-${id}`);
		weaponElm.classList.remove('plural-gained');
		weaponElm.classList.remove('ungained');
		weaponElm.classList.remove('gained');
		if (counts[id] === 0) {
			weaponElm.classList.add('ungained');
		} else if (counts[id] === 1) {
			weaponElm.classList.add('gained');
		} else {
			weaponElm.classList.add('gained');
			weaponElm.classList.add('plural-gained');
		}
		if (!isIgnoredComplete) {
			const isCompleteOld = isComplete;
			isComplete = checkComplete();
			if (!isCompleteOld && isComplete) {
				setTimeout(() => {
					window.alert(getMessage('congrats'));
				}, 10);
			}
			save();
		}
	};

	/** updateGrizzcoVisible()
	 * ブキを更新する。
	 */
	const updateGrizzcoVisible = () => {
		const weaponElms = document.getElementsByClassName('grizzco-weapon-container');
		Array.prototype.forEach.call(weaponElms, (elm) => {
			elm.classList.add('hidden');
		});
		if (grizzcoVisibleOption < 7040) {
			document.getElementById(`weapon-${grizzcoVisibleOption}`)
				.classList.remove('hidden');
		} else {
			Array.prototype.forEach.call(weaponElms, (elm) => {
				elm.classList.remove('hidden');
			});
		}
	};


	/** toggleCounter()
	 * ふきだしの表示を切り替える。
	 */
	const toggleCounter = () => {
		const fukidashiClass = 'weapon-count-disabled';
		const wrapperElm = document.getElementById('weapons-wrapper');
		if (wrapperElm.classList.contains(fukidashiClass)) {
			wrapperElm.classList.remove(fukidashiClass);
		} else {
			wrapperElm.classList.add(fukidashiClass);
		}
	};

	/** getWeaponSize()
	 * ブキ画像の大きさを決める。
	 */
	const getWeaponSize = () => {
		const windowWidth = getWindowWidth();
		return Math.max(30, Math.min(90, Math.floor(windowWidth / 12)));
	};

	/** resizeWeapons()
	 * ブキ画像の大きさを変える。
	 */
	const resizeWeapons = () => {
		const weaponSize = getWeaponSize();
		const scale = weaponSize / defaultWeaponSize;
		const marginTB = Math.min(15, 20 * scale);
		const marginLR = Math.min(15, 50 * scale);
		const weaponWidth = weaponSize + marginLR * 2;
		const wrapperWidth = document.getElementById('h1').getBoundingClientRect().width;
		const columnNum = Math.floor(wrapperWidth / weaponWidth);
		const paddingLeft = Math.floor((wrapperWidth - columnNum * weaponWidth) / 2);
		document.getElementById('weapons-wrapper').style.setProperty('padding-left', `${paddingLeft}px`);
		weaponIds.forEach((id) => {
			const weaponElm = document.getElementById(`weapon-${id}`);
			weaponElm.style.setProperty('margin-top', `${marginTB}px`);
			weaponElm.style.setProperty('margin-bottom', `${marginTB}px`);
			weaponElm.style.setProperty('margin-left', `${marginLR}px`);
			weaponElm.style.setProperty('margin-right', `${marginLR}px`);
			const countElm = document.getElementById(`weapon-count-${id}`);
			countElm.style.setProperty('--scale', `${scale}`);
			const imageElm = document.getElementById(`weapon-image-${id}`);
			imageElm.style.setProperty('width', `${weaponSize}px`);
			imageElm.style.setProperty('height', `${weaponSize}px`);
			imageElm.style.setProperty('background-size', `${weaponSize}px ${weaponSize}px`);
			imageElm.style.setProperty('background-position-y',
				`${weapons[id].bottom * scale}px`);
		});
	};

	/** init()
	 * 初期化する。
	 */
	const init = () => {
		// ロード
		load();
		// ロードできなかったときの初期化処理
		if (counts === null) {
			counts = {};
			weaponIds.forEach((id) => {
				counts[id] = 0;
			});
		}
		// テーマ
		document.body.classList.add(`theme-${themeOption}`);
		setTimeout(() => {
			document.body.style.removeProperty('transition');
		});
		// クマブキオプション
		const grizzcoSelectElm = document.getElementById('grizzco-select');
		grizzcoSelectElm.addEventListener('change', () => {
			grizzcoVisibleOption = parseInt(grizzcoSelectElm.value, 10);
			updateGrizzcoVisible();
			save();
		});
		// テーマオプション
		const themeSelectElm = document.getElementById('theme-select');
		themeSelectElm.addEventListener('change', () => {
			themeOption = themeSelectElm.value;
			document.body.classList.remove('theme-light');
			document.body.classList.remove('theme-dark');
			document.body.classList.add(`theme-${themeOption}`);
			save();
		});
		// 増加オプション
		const increaseSelectElm = document.getElementById('increase-select');
		increaseSelectElm.addEventListener('change', () => {
			increaseOption = !!parseInt(increaseSelectElm.value, 10);
			save();
		});
		// ボタンを追加する
		const wrapperElm = document.getElementById('weapons-wrapper');
		weaponIds.forEach((id) => {
			const src = `${weaponsDirectory + id}.png`;
			const weaponElm = document.createElement('div');
			weaponElm.setAttribute('title', `${weapons[id][lang]}`);
			weaponElm.setAttribute('id', `weapon-${id}`);
			weaponElm.classList.add('weapon-container');
			if (id >= 7000) {
				weaponElm.classList.add('grizzco-weapon-container');
			}
			const countElm = document.createElement('div');
			countElm.classList.add('weapon-count');
			countElm.setAttribute('weapon-id', id);
			countElm.setAttribute('id', `weapon-count-${id}`);
			countElm.addEventListener(EVENT_CLICK, countminus);
			const imageElm = document.createElement('div');
			imageElm.classList.add('weapon-image');
			imageElm.style.setProperty('background-image', `url(${src})`);
			imageElm.setAttribute('weapon-id', id);
			imageElm.setAttribute('id', `weapon-image-${id}`);
			imageElm.addEventListener(EVENT_CLICK, count);
			imageElm.addEventListener('touchstart', (e) => {
				console.log(e.timeStamp);
			});
			imageElm.addEventListener('mousedown', (e) => {
				console.log(e.timeStamp);
			});
			weaponElm.appendChild(imageElm);
			weaponElm.appendChild(countElm);
			wrapperElm.appendChild(weaponElm);
			update(id, true);
		});
		// ブキリサイズ
		resizeWeapons();
		// クマブキの表示・非表示
		updateGrizzcoVisible();
		// 翻訳
		if (lang === 'en') {
			const transTargetElms = document.getElementsByClassName('trans');
			Array.prototype.forEach.call(transTargetElms, (elm) => {
				elm.textContent = elm.getAttribute('en');
			});
		}
	};
	
	const collectStatistics = () => {
		const wrapper = document.getElementById('statistics-wrapper');
		wrapper.style.setProperty('display', 'block');
		document.body.style.setProperty('overflow', 'hidden');
		const totalCountLang = {
			ja: 'ブキを支給された回数の合計',
			en: 'Total number of times weapons were provided',
		};
		const headerLang = {
			ja: '<tr><td>ブキ</td><td>回数</td><td>割合</td></tr>',
			en: '<tr><td>WEAPON</td><td>TIMES</td><td>RATIO</td></tr>',
		};
		const closeLang = {
			ja: '閉じる',
			en: 'Close',
		};
		const array = [];
		let totalCount = 0;
		Object.keys(counts).forEach((id) => {
			array.push({
				id: id,
				count: counts[id],
			});
			totalCount += counts[id];
		});
		array.sort((a, b) => {
			return (a.count > b.count) ? -1 : 1;
		});
		let html = headerLang[lang];
		for (let i = 0; i < array.length; i += 1) {
			if (array[i].count > 0) {
				console.log(array[i]);
				const src = `${weaponsDirectory + array[i].id}.png`;
				html += '<tr>';
				html += `<td><img src="${src}">${weapons[array[i].id][lang]}</td>`
				html += `<td>${array[i].count}</td>`
				html += `<td>${(100 * array[i].count / totalCount).toFixed(1)} %</td>`
				html += '</tr>';
			}
		}
		const statisticsTable = document.getElementById('statistics-table');
		statisticsTable.innerHTML = html;
		const totalCountSpan = document.getElementById('total-count');
		totalCountSpan.textContent = `${totalCountLang[lang]}: ${totalCount}`;
		const closeSpan = document.getElementById('statistics-close');
		closeSpan.textContent = `${closeLang[lang]}`;
		if (!closeSpan.isSetEvent) {
			closeSpan.isSetEvent = true;
			closeSpan.addEventListener(EVENT_CLICK, () => {
				document.body.style.setProperty('overflow', 'auto');
				wrapper.style.setProperty('display', 'none');
			});
		}
	};
	// window操作
	window.addEventListener('resize', resizeWeapons);
	window.addEventListener('DOMContentLoaded', init);
	window.myClear = clear;
	window.myUndo = undo;
	window.myRedo = redo;
	window.myToggleCounter = toggleCounter;
	window.myStatistics = collectStatistics;
})();