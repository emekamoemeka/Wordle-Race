
// Initialize words list
const words = ['aback', 'abase', 'abate', 'abbey', 'abbot', 'abhor', 'abide', 'abled', 'abode', 'abort', 'about', 'above', 'abuse', 'abyss', 'acorn', 'acrid', 'actor', 'acute', 'adage', 'adapt', 'adept', 'adieu', 'admin', 'admit', 'adobe', 'adopt', 'adore', 'adorn', 'adult', 'affix', 'afire', 'afoot', 'afoul', 'after', 'again', 'agape', 'agate', 'agent', 'agile', 'aging', 'aglow', 'agony', 'agree', 'ahead', 'aider', 'aisle', 'alarm', 'album', 'alert', 'algae', 'alibi', 'alien', 'align', 'alike', 'alive', 'allay', 'alley', 'allot', 'allow', 'alloy', 'aloft', 'alone', 'along', 'aloof', 'aloud', 'alpha', 'altar', 'alter', 'amass', 'amaze', 'amber', 'amble', 'amend', 'amiss', 'amity', 'among', 'ample', 'amply', 'amuse', 'angel', 'anger', 'angle', 'angry', 'angst', 'anime', 'ankle', 'annex', 'annoy', 'annul', 'anode', 'antic', 'anvil', 'aorta', 'apart', 'aphid', 'aping', 'apnea', 'apple', 'apply', 'apron', 'aptly', 'arbor', 'ardor', 'arena', 'argue', 'arise', 'armor', 'aroma', 'arose', 'array', 'arrow', 'arson', 'artsy', 'ascot', 'ashen', 'aside', 'askew', 'assay', 'asset', 'atoll', 'atone', 'attic', 'audio', 'audit', 'augur', 'aunty', 'avail', 'avert', 'avian', 'avoid', 'await', 'awake', 'award', 'aware', 'awash', 'awful', 'awoke', 'axial', 'axiom', 'axion', 'azure', 'bacon', 'badge', 'badly', 'bagel', 'baggy', 'baker', 'baler', 'balmy', 'banal', 'banjo', 'barge', 'baron', 'basal', 'basic', 'basil', 'basin', 'basis', 'baste', 'batch', 'bathe', 'baton', 'batty', 'bawdy', 'bayou', 'beach', 'beady', 'beard', 'beast', 'beech', 'beefy', 'befit', 'began', 'begat', 'beget', 'begin', 'begun', 'being', 'belch', 'belie', 'belle', 'belly', 'below', 'bench', 'beret', 'berry', 'berth', 'beset', 'betel', 'bevel', 'bezel', 'bible', 'bicep', 'biddy', 'bigot', 'bilge', 'billy', 'binge', 'bingo', 'biome', 'birch', 'birth', 'bison', 'bitty', 'black', 'blade', 'blame', 'bland', 'blank', 'blare', 'blast', 'blaze', 'bleak', 'bleat', 'bleed', 'bleep', 'blend', 'bless', 'blimp', 'blind', 'blink', 'bliss', 'blitz', 'bloat', 'block', 'bloke', 'blond', 'blood', 'bloom', 'blown', 'bluer', 'bluff', 'blunt', 'blurb', 'blurt', 'blush', 'board', 'boast', 'bobby', 'boney', 'bongo', 'bonus', 'booby', 'boost', 'booth', 'booty', 'booze', 'boozy', 'borax', 'borne', 'bosom', 'bossy', 'botch', 'bough', 'boule', 'bound', 'bowel', 'boxer', 'brace', 'braid', 'brain', 'brake', 'brand', 'brash', 'brass', 'brave', 'bravo', 'brawl', 'brawn', 'bread', 'break', 'breed', 'briar', 'bribe', 'brick', 'bride', 'brief', 'brine', 'bring', 'brink', 'briny', 'brisk', 'broad', 'broil', 'broke', 'brood', 'brook', 'broom', 'broth', 'brown', 'brunt', 'brush', 'brute', 'buddy', 'budge', 'buggy', 'bugle', 'build', 'built', 'bulge', 'bulky', 'bully', 'bunch', 'bunny', 'burly', 'burnt', 'burst', 'bused', 'bushy', 'butch', 'butte', 'buxom', 'buyer', 'bylaw', 'cabal', 'cabby', 'cabin', 'cable', 'cacao', 'cache', 'cacti', 'caddy', 'cadet', 'cagey', 'cairn', 'camel', 'cameo', 'canal', 'candy', 'canny', 'canoe', 'canon', 'caper', 'caput', 'carat', 'cargo', 'carol', 'carry', 'carve', 'caste', 'catch', 'cater', 'catty', 'caulk', 'cause', 'cavil', 'cease', 'cedar', 'cello', 'chafe', 'chaff', 'chain', 'chair', 'chalk', 'champ', 'chant', 'chaos', 'chard', 'charm', 'chart', 'chase', 'chasm', 'cheap', 'cheat', 'check', 'cheek', 'cheer', 'chess', 'chest', 'chick', 'chide', 'chief', 'child', 'chili', 'chill', 'chime', 'china', 'chirp', 'chock', 'choir', 'choke', 'chord', 'chore', 'chose', 'chuck', 'chump', 'chunk', 'churn', 'chute', 'cider', 'cigar', 'cinch', 'circa', 'civic', 'civil', 'clack', 'claim', 'clamp', 'clang', 'clank', 'clash', 'clasp', 'class', 'clean', 'clear', 'cleat', 'cleft', 'clerk', 'click', 'cliff', 'climb', 'cling', 'clink', 'cloak', 'clock', 'clone', 'close', 'cloth', 'cloud', 'clout', 'clove', 'clown', 'cluck', 'clued', 'clump', 'clung', 'coach', 'coast', 'cobra', 'cocoa', 'colon', 'color', 'comet', 'comfy', 'comic', 'comma', 'conch', 'condo', 'conic', 'copse', 'coral', 'corer', 'corny', 'couch', 'cough', 'could', 'count', 'coupe', 'court', 'coven', 'cover', 'covet', 'covey', 'cower', 'coyly', 'crack', 'craft', 'cramp', 'crane', 'crank', 'crash', 'crass', 'crate', 'crave', 'crawl', 'craze', 'crazy', 'creak', 'cream', 'credo', 'creed', 'creek', 'creep', 'creme', 'crepe', 'crept', 'cress', 'crest', 'crick', 'cried', 'crier', 'crime', 'crimp', 'crisp', 'croak', 'crock', 'crone', 'crony', 'crook', 'cross', 'croup', 'crowd', 'crown', 'crude', 'cruel', 'crumb', 'crump', 'crush', 'crust', 'crypt', 'cubic', 'cumin', 'curio', 'curly', 'curry', 'curse', 'curve', 'curvy', 'cutie', 'cyber', 'cycle', 'cynic', 'daddy', 'daily', 'dairy', 'daisy', 'dally', 'dance', 'dandy', 'datum', 'daunt', 'dealt', 'death', 'debar', 'debit', 'debug', 'debut', 'decal', 'decay', 'decor', 'decoy', 'decry', 'defer', 'deign', 'deity', 'delay', 'delta', 'delve', 'demon', 'demur', 'denim', 'dense', 'depot', 'depth', 'derby', 'deter', 'detox', 'deuce', 'devil', 'diary', 'dicey', 'digit', 'dilly', 'dimly', 'diner', 'dingo', 'dingy', 'diode', 'dirge', 'dirty', 'disco', 'ditch', 'ditto', 'ditty', 'diver', 'dizzy', 'dodge', 'dodgy', 'dogma', 'doing', 'dolly', 'donor', 'donut', 'dopey', 'doubt', 'dough', 'dowdy', 'dowel', 'downy', 'dowry', 'dozen', 'draft', 'drain', 'drake', 'drama', 'drank', 'drape', 'drawl', 'drawn', 'dread', 'dream', 'dress', 'dried', 'drier', 'drift', 'drill', 'drink', 'drive', 'droit', 'droll', 'drone', 'drool', 'droop', 'dross', 'drove', 'drown', 'druid', 'drunk', 'dryer', 'dryly', 'duchy', 'dully', 'dummy', 'dumpy', 'dunce', 'dusky', 'dusty', 'dutch', 'duvet', 'dwarf', 'dwell', 'dwelt', 'dying', 'eager', 'eagle', 'early', 'earth', 'easel', 'eaten', 'eater', 'ebony', 'eclat', 'edict', 'edify', 'eerie', 'egret', 'eight', 'eject', 'eking', 'elate', 'elbow', 'elder', 'elect', 'elegy', 'elfin', 'elide', 'elite', 'elope', 'elude', 'email', 'embed', 'ember', 'emcee', 'empty', 'enact', 'endow', 'enema', 'enemy', 'enjoy', 'ennui', 'ensue', 'enter', 'entry', 'envoy', 'epoch', 'epoxy', 'equal', 'equip', 'erase', 'erect', 'erode', 'error', 'erupt', 'essay', 'ester', 'ether', 'ethic', 'ethos', 'etude', 'evade', 'event', 'every', 'evict', 'evoke', 'exact', 'exalt', 'excel', 'exert', 'exile', 'exist', 'expel', 'extol', 'extra', 'exult', 'eying', 'fable', 'facet', 'faint', 'fairy', 'faith', 'fancy', 'fanny', 'farce', 'fatal', 'fatty', 'fault', 'fauna', 'favor', 'feast', 'fecal', 'feign', 'fella', 'felon', 'femme', 'femur', 'fence', 'feral', 'ferry', 'fetal', 'fetch', 'fetid', 'fetus', 'fever', 'fewer', 'fiber', 'ficus', 'field', 'fiend', 'fiery', 'fifth', 'fifty', 'fight', 'filer', 'filet', 'filly', 'filmy', 'filth', 'final', 'finch', 'finer', 'first', 'fishy', 'fixer', 'fizzy', 'fjord', 'flack', 'flail', 'flair', 'flake', 'flaky', 'flame', 'flank', 'flare', 'flash', 'flask', 'fleck', 'fleet', 'flesh', 'flick', 'flier', 'fling', 'flint', 'flirt', 'float', 'flock', 'flood', 'floor', 'flora', 'floss', 'flour', 'flout', 'flown', 'fluff', 'fluid', 'fluke', 'flume', 'flung', 'flunk', 'flush', 'flute', 'flyer', 'foamy', 'focal', 'focus', 'foggy', 'foist', 'folio', 'folly', 'foray', 'force', 'forge', 'forgo', 'forte', 'forth', 'forty', 'forum', 'found', 'foyer', 'frail', 'frame', 'frank', 'fraud', 'freak', 'freed', 'freer', 'fresh', 'friar', 'fried', 'frill', 'frisk', 'fritz', 'frock', 'frond', 'front', 'frost', 'froth', 'frown', 'froze', 'fruit', 'fudge', 'fugue', 'fully', 'fungi', 'funky', 'funny', 'furor', 'furry', 'fussy', 'fuzzy', 'gaffe', 'gaily', 'gamer', 'gamma', 'gamut', 'gassy', 'gaudy', 'gauge', 'gaunt', 'gauze', 'gavel', 'gawky', 'gayer', 'gayly', 'gazer', 'gecko', 'geeky', 'geese', 'genie', 'genre', 'ghost', 'ghoul', 'giant', 'giddy', 'gipsy', 'girly', 'girth', 'given', 'giver', 'glade', 'gland', 'glare', 'glass', 'glaze', 'gleam', 'glean', 'glide', 'glint', 'gloat', 'globe', 'gloom', 'glory', 'gloss', 'glove', 'glyph', 'gnash', 'gnome', 'godly', 'going', 'golem', 'golly', 'gonad', 'goner', 'goody', 'gooey', 'goofy', 'goose', 'gorge', 'gouge', 'gourd', 'grace', 'grade', 'graft', 'grail', 'grain', 'grand', 'grant', 'grape', 'graph', 'grasp', 'grass', 'grate', 'grave', 'gravy', 'graze', 'great', 'greed', 'green', 'greet', 'grief', 'grill', 'grime', 'grimy', 'grind', 'gripe', 'groan', 'groin', 'groom', 'grope', 'gross', 'group', 'grout', 'grove', 'growl', 'grown', 'gruel', 'gruff', 'grunt', 'guard', 'guava', 'guess', 'guest', 'guide', 'guild', 'guile', 'guilt', 'guise', 'gulch', 'gully', 'gumbo', 'gummy', 'guppy', 'gusto', 'gusty', 'gypsy', 'habit', 'hairy', 'halve', 'handy', 'happy', 'hardy', 'harem', 'harpy', 'harry', 'harsh', 'haste', 'hasty', 'hatch', 'hater', 'haunt', 'haute', 'haven', 'havoc', 'hazel', 'heady', 'heard', 'heart', 'heath', 'heave', 'heavy', 'hedge', 'hefty', 'heist', 'helix', 'hello', 'hence', 'heron', 'hilly', 'hinge', 'hippo', 'hippy', 'hitch', 'hoard', 'hobby', 'hoist', 'holly', 'homer', 'honey', 'honor', 'horde', 'horny', 'horse', 'hotel', 'hotly', 'hound', 'house', 'hovel', 'hover', 'howdy', 'human', 'humid', 'humor', 'humph', 'humus', 'hunch', 'hunky', 'hurry', 'husky', 'hussy', 'hutch', 'hydro', 'hyena', 'hymen', 'hyper', 'icily', 'icing', 'ideal', 'idiom', 'idiot', 'idler', 'idyll', 'igloo', 'iliac', 'image', 'imbue', 'impel', 'imply', 'inane', 'inbox', 'incur', 'index', 'inept', 'inert', 'infer', 'ingot', 'inlay', 'inlet', 'inner', 'input', 'inter', 'intro', 'ionic', 'irate', 'irony', 'islet', 'issue', 'itchy', 'ivory', 'jaunt', 'jazzy', 'jelly', 'jerky', 'jetty', 'jewel', 'jiffy', 'joint', 'joist', 'joker', 'jolly', 'joust', 'judge', 'juice', 'juicy', 'jumbo', 'jumpy', 'junta', 'junto', 'juror', 'kappa', 'karma', 'kayak', 'kebab', 'khaki', 'kinky', 'kiosk', 'kitty', 'knack', 'knave', 'knead', 'kneed', 'kneel', 'knelt', 'knife', 'knock', 'knoll', 'known', 'koala', 'krill', 'label', 'labor', 'laden', 'ladle', 'lager', 'lance', 'lanky', 'lapel', 'lapse', 'large', 'larva', 'lasso', 'latch', 'later', 'lathe', 'latte', 'laugh', 'layer', 'leach', 'leafy', 'leaky', 'leant', 'leapt', 'learn', 'lease', 'leash', 'least', 'leave', 'ledge', 'leech', 'leery', 'lefty', 'legal', 'leggy', 'lemon', 'lemur', 'leper', 'level', 'lever', 'libel', 'liege', 'light', 'liken', 'lilac', 'limbo', 'limit', 'linen', 'liner', 'lingo', 'lipid', 'lithe', 'liver', 'livid', 'llama', 'loamy', 'loath', 'lobby', 'local', 'locus', 'lodge', 'lofty', 'logic', 'login', 'loopy', 'loose', 'lorry', 'loser', 'louse', 'lousy', 'lover', 'lower', 'lowly', 'loyal', 'lucid', 'lucky', 'lumen', 'lumpy', 'lunar', 'lunch', 'lunge', 'lupus', 'lurch', 'lurid', 'lusty', 'lying', 'lymph', 'lyric', 'macaw', 'macho', 'macro', 'madam', 'madly', 'mafia', 'magic', 'magma', 'maize', 'major', 'maker', 'mambo', 'mamma', 'mammy', 'manga', 'mange', 'mango', 'mangy', 'mania', 'manic', 'manly', 'manor', 'maple', 'march', 'marry', 'marsh', 'mason', 'masse', 'match', 'matey', 'mauve', 'maxim', 'maybe', 'mayor', 'mealy', 'meant', 'meaty', 'mecca', 'medal', 'media', 'medic', 'melee', 'melon', 'mends', 'mercy', 'merge', 'merit', 'merry', 'metal', 'meter', 'metro', 'micro', 'midge', 'midst', 'might', 'milky', 'mimic', 'mince', 'miner', 'minim', 'minor', 'minty', 'minus', 'mirth', 'miser', 'missy', 'mocha', 'modal', 'model', 'modem', 'mogul', 'moist', 'molar', 'moldy', 'money', 'month', 'moody', 'moose', 'moral', 'moron', 'morph', 'mossy', 'motel', 'motif', 'motor', 'motto', 'moult', 'mound', 'mount', 'mourn', 'mouse', 'mouth', 'mover', 'movie', 'mower', 'mucky', 'mucus', 'muddy', 'mulch', 'mummy', 'munch', 'mural', 'murky', 'mushy', 'music', 'musky', 'musty', 'myrrh', 'nadir', 'naive', 'nanny', 'nasal', 'nasty', 'natal', 'naval', 'navel', 'needy', 'neigh', 'nerdy', 'nerve', 'never', 'newer', 'newly', 'nicer', 'niche', 'niece', 'night', 'ninja', 'ninny', 'ninth', 'noble', 'nobly', 'noise', 'noisy', 'nomad', 'noose', 'north', 'nosey', 'notch', 'novel', 'nudge', 'nurse', 'nutty', 'nylon', 'nymph', 'oaken', 'obese', 'occur', 'ocean', 'octal', 'octet', 'odder', 'oddly', 'offal', 'offer', 'often', 'olden', 'older', 'olive', 'ombre', 'omega', 'onion', 'onset', 'opera', 'opine', 'opium', 'optic', 'orbit', 'order', 'organ', 'other', 'otter', 'ought', 'ounce', 'outdo', 'outer', 'outgo', 'ovary', 'ovate', 'overt', 'ovine', 'ovoid', 'owing', 'owner', 'oxide', 'ozone', 'paddy', 'pagan', 'paint', 'paler', 'palsy', 'panel', 'panic', 'pansy', 'papal', 'paper', 'parer', 'parka', 'parry', 'parse', 'party', 'pasta', 'paste', 'pasty', 'patch', 'patio', 'patsy', 'patty', 'pause', 'payee', 'payer', 'peace', 'peach', 'pearl', 'pecan', 'pedal', 'penal', 'pence', 'penne', 'penny', 'perch', 'peril', 'perky', 'pesky', 'pesto', 'petal', 'petty', 'phase', 'phone', 'phony', 'photo', 'piano', 'picky', 'piece', 'piety', 'piggy', 'pilot', 'pinch', 'piney', 'pinky', 'pinto', 'piper', 'pique', 'pitch', 'pithy', 'pivot', 'pixel', 'pixie', 'pizza', 'place', 'plaid', 'plain', 'plait', 'plane', 'plank', 'plant', 'plate', 'plaza', 'plead', 'pleat', 'plied', 'plier', 'pluck', 'plumb', 'plume', 'plump', 'plunk', 'plush', 'poesy', 'point', 'poise', 'poker', 'polar', 'polka', 'polyp', 'pooch', 'poppy', 'porch', 'poser', 'posit', 'posse', 'pouch', 'pound', 'pouty', 'power', 'prank', 'prawn', 'preen', 'press', 'price', 'prick', 'pride', 'pried', 'prime', 'primo', 'print', 'prior', 'prism', 'privy', 'prize', 'probe', 'prone', 'prong', 'proof', 'prose', 'proud', 'prove', 'prowl', 'proxy', 'prude', 'prune', 'psalm', 'pubic', 'pudgy', 'puffy', 'pulpy', 'pulse', 'punch', 'pupil', 'puppy', 'puree', 'purer', 'purge', 'purse', 'pushy', 'putty', 'pygmy', 'quack', 'quail', 'quake', 'qualm', 'quark', 'quart', 'quash', 'quasi', 'queen', 'queer', 'quell', 'query', 'quest', 'queue', 'quick', 'quiet', 'quill', 'quilt', 'quirk', 'quite', 'quota', 'quote', 'quoth', 'rabbi', 'rabid', 'racer', 'radar', 'radii', 'radio', 'rainy', 'raise', 'rajah', 'rally', 'ralph', 'ramen', 'ranch', 'randy', 'range', 'rapid', 'rarer', 'raspy', 'ratio', 'ratty', 'raven', 'rayon', 'razor', 'reach', 'react', 'ready', 'realm', 'rearm', 'rebar', 'rebel', 'rebus', 'rebut', 'recap', 'recur', 'recut', 'reedy', 'refer', 'refit', 'regal', 'rehab', 'reign', 'relax', 'relay', 'relic', 'remit', 'renal', 'renew', 'repay', 'repel', 'reply', 'rerun', 'reset', 'resin', 'retch', 'retro', 'retry', 'reuse', 'revel', 'revue', 'rhino', 'rhyme', 'rider', 'ridge', 'rifle', 'right', 'rigid', 'rigor', 'rinse', 'ripen', 'riper', 'risen', 'riser', 'risky', 'rival', 'river', 'rivet', 'roach', 'roast', 'robin', 'robot', 'rocky', 'rodeo', 'roger', 'rogue', 'roomy', 'roost', 'rotor', 'rouge', 'rough', 'round', 'rouse', 'route', 'rover', 'rowdy', 'rower', 'royal', 'ruddy', 'ruder', 'rugby', 'ruler', 'rumba', 'rumor', 'rupee', 'rural', 'rusty', 'sadly', 'safer', 'saint', 'salad', 'sally', 'salon', 'salsa', 'salty', 'salve', 'salvo', 'sandy', 'saner', 'sappy', 'sassy', 'satin', 'satyr', 'sauce', 'saucy', 'sauna', 'saute', 'savor', 'savoy', 'savvy', 'scald', 'scale', 'scalp', 'scaly', 'scamp', 'scant', 'scare', 'scarf', 'scary', 'scene', 'scent', 'scion', 'scoff', 'scold', 'scone', 'scoop', 'scope', 'score', 'scorn', 'scour', 'scout', 'scowl', 'scram', 'scrap', 'scree', 'screw', 'scrub', 'scrum', 'scuba', 'sedan', 'seedy', 'segue', 'seize', 'semen', 'sense', 'sepia', 'serif', 'serum', 'serve', 'setup', 'seven', 'sever', 'sewer', 'shack', 'shade', 'shady', 'shaft', 'shake', 'shaky', 'shale', 'shall', 'shalt', 'shame', 'shank', 'shape', 'shard', 'share', 'shark', 'sharp', 'shave', 'shawl', 'shear', 'sheen', 'sheep', 'sheer', 'sheet', 'sheik', 'shelf', 'shell', 'shied', 'shift', 'shine', 'shiny', 'shire', 'shirk', 'shirt', 'shoal', 'shock', 'shone', 'shook', 'shoot', 'shore', 'shorn', 'short', 'shout', 'shove', 'shown', 'showy', 'shrew', 'shrub', 'shrug', 'shuck', 'shunt', 'shush', 'shyly', 'siege', 'sieve', 'sight', 'sigma', 'silky', 'silly', 'since', 'sinew', 'singe', 'siren', 'sissy', 'sixth', 'sixty', 'skate', 'skier', 'skiff', 'skill', 'skimp', 'skirt', 'skulk', 'skull', 'skunk', 'slack', 'slain', 'slang', 'slant', 'slash', 'slate', 'sleek', 'sleep', 'sleet', 'slept', 'slice', 'slick', 'slide', 'slime', 'slimy', 'sling', 'slink', 'sloop', 'slope', 'slosh', 'sloth', 'slump', 'slung', 'slunk', 'slurp', 'slush', 'slyly', 'smack', 'small', 'smart', 'smash', 'smear', 'smell', 'smelt', 'smile', 'smirk', 'smite', 'smith', 'smock', 'smoke', 'smoky', 'smote', 'snack', 'snail', 'snake', 'snaky', 'snare', 'snarl', 'sneak', 'sneer', 'snide', 'sniff', 'snipe', 'snoop', 'snore', 'snort', 'snout', 'snowy', 'snuck', 'snuff', 'soapy', 'sober', 'soggy', 'solar', 'solid', 'solve', 'sonar', 'sonic', 'sooth', 'sooty', 'sorry', 'sound', 'south', 'sower', 'space', 'spade', 'spank', 'spare', 'spark', 'spasm', 'spawn', 'speak', 'spear', 'speck', 'speed', 'spell', 'spelt', 'spend', 'spent', 'sperm', 'spice', 'spicy', 'spied', 'spiel', 'spike', 'spiky', 'spill', 'spilt', 'spine', 'spiny', 'spire', 'spite', 'splat', 'split', 'spoil', 'spoke', 'spoof', 'spook', 'spool', 'spoon', 'spore', 'sport', 'spout', 'spray', 'spree', 'sprig', 'spunk', 'spurn', 'spurt', 'squad', 'squat', 'squib', 'stack', 'staff', 'stage', 'staid', 'stain', 'stair', 'stake', 'stale', 'stalk', 'stall', 'stamp', 'stand', 'stank', 'stare', 'stark', 'start', 'stash', 'state', 'stave', 'stead', 'steak', 'steal', 'steam', 'steed', 'steel', 'steep', 'steer', 'stein', 'stern', 'stick', 'stiff', 'still', 'stilt', 'sting', 'stink', 'stint', 'stock', 'stoic', 'stoke', 'stole', 'stomp', 'stone', 'stony', 'stood', 'stool', 'stoop', 'store', 'stork', 'storm', 'story', 'stout', 'stove', 'strap', 'straw', 'stray', 'strip', 'strut', 'stuck', 'study', 'stuff', 'stump', 'stung', 'stunk', 'stunt', 'style', 'suave', 'sugar', 'suing', 'suite', 'sulky', 'sully', 'sumac', 'sunny', 'super', 'surer', 'surge', 'surly', 'sushi', 'swami', 'swamp', 'swarm', 'swash', 'swath', 'swear', 'sweat', 'sweep', 'sweet', 'swell', 'swept', 'swift', 'swill', 'swine', 'swing', 'swirl', 'swish', 'swoon', 'swoop', 'sword', 'swore', 'sworn', 'swung', 'synod', 'syrup', 'tabby', 'table', 'taboo', 'tacit', 'tacky', 'taffy', 'taint', 'taken', 'taker', 'tally', 'talon', 'tamer', 'tango', 'tangy', 'taper', 'tapir', 'tardy', 'tarot', 'taste', 'tasty', 'tatty', 'taunt', 'tawny', 'teach', 'teary', 'tease', 'teddy', 'teeth', 'tempo', 'tenet', 'tenor', 'tense', 'tenth', 'tepee', 'tepid', 'terra', 'terse', 'testy', 'thank', 'theft', 'their', 'theme', 'there', 'these', 'theta', 'thick', 'thief', 'thigh', 'thing', 'think', 'third', 'thong', 'thorn', 'those', 'three', 'threw', 'throb', 'throw', 'thrum', 'thumb', 'thump', 'thyme', 'tiara', 'tibia', 'tidal', 'tiger', 'tight', 'tilde', 'timer', 'timid', 'tipsy', 'titan', 'tithe', 'title', 'toast', 'today', 'toddy', 'token', 'tonal', 'tonga', 'tonic', 'tooth', 'topaz', 'topic', 'torch', 'torso', 'torus', 'total', 'totem', 'touch', 'tough', 'towel', 'tower', 'toxic', 'toxin', 'trace', 'track', 'tract', 'trade', 'trail', 'train', 'trait', 'tramp', 'trash', 'trawl', 'tread', 'treat', 'trend', 'triad', 'trial', 'tribe', 'trice', 'trick', 'tried', 'tripe', 'trite', 'troll', 'troop', 'trope', 'trout', 'trove', 'truce', 'truck', 'truer', 'truly', 'trump', 'trunk', 'truss', 'trust', 'truth', 'tryst', 'tubal', 'tuber', 'tulip', 'tulle', 'tumor', 'tunic', 'turbo', 'tutor', 'twang', 'tweak', 'tweed', 'tweet', 'twice', 'twine', 'twirl', 'twist', 'twixt', 'tying', 'udder', 'ulcer', 'ultra', 'umbra', 'uncle', 'uncut', 'under', 'undid', 'undue', 'unfed', 'unfit', 'unify', 'union', 'unite', 'unity', 'unlit', 'unmet', 'unset', 'untie', 'until', 'unwed', 'unzip', 'upper', 'upset', 'urban', 'urine', 'usage', 'usher', 'using', 'usual', 'usurp', 'utile', 'utter', 'vague', 'valet', 'valid', 'valor', 'value', 'valve', 'vapid', 'vapor', 'vault', 'vaunt', 'vegan', 'venom', 'venue', 'verge', 'verse', 'verso', 'verve', 'vicar', 'video', 'vigil', 'vigor', 'villa', 'vinyl', 'viola', 'viper', 'viral', 'virus', 'visit', 'visor', 'vista', 'vital', 'vivid', 'vixen', 'vocal', 'vodka', 'vogue', 'voice', 'voila', 'vomit', 'voter', 'vouch', 'vowel', 'vying', 'wacky', 'wafer', 'wager', 'wagon', 'waist', 'waive', 'waltz', 'warty', 'waste', 'watch', 'water', 'waver', 'waxen', 'weary', 'weave', 'wedge', 'weedy', 'weigh', 'weird', 'welch', 'welsh', 'whack', 'whale', 'wharf', 'wheat', 'wheel', 'whelp', 'where', 'which', 'whiff', 'while', 'whine', 'whiny', 'whirl', 'whisk', 'white', 'whole', 'whoop', 'whose', 'widen', 'wider', 'widow', 'width', 'wield', 'wight', 'willy', 'wimpy', 'wince', 'winch', 'windy', 'wiser', 'wispy', 'witch', 'witty', 'woken', 'woman', 'women', 'woody', 'wooer', 'wooly', 'woozy', 'wordy', 'world', 'worry', 'worse', 'worst', 'worth', 'would', 'wound', 'woven', 'wrack', 'wrath', 'wreak', 'wreck', 'wrest', 'wring', 'wrist', 'write', 'wrong', 'wrote', 'wrung', 'wryly', 'yacht', 'yearn', 'yeast', 'yield', 'young', 'youth', 'zebra', 'zesty', 'zonal']

//Initialize several UI elements
;(function(exports) {
    var style = document.querySelector("head")
                        .appendChild(document.createElement("style"));
  
    var styleSheet = document.styleSheets[document.styleSheets.length - 1];
    styleSheet.insertRule("* {}", 0);
  
    exports.universal = styleSheet.cssRules[0];
  }(window));
const tiles = Array.from(document.getElementById("board").querySelectorAll("div"))
const gameOverScreen = document.getElementById("gameOverScreen")
const background = document.getElementById("darken")
const finalMessage = document.getElementById("finalMessage")
const exitButton = document.getElementById("escape")
const replayButton = document.getElementById("replay")
const keyboardButtons = Array.from(document.getElementById("keyboard").querySelectorAll("button"))
const slideInMenu = document.getElementById("slideInMenu")
const slideInButton = document.getElementById("slideInButton")
const correctWord = document.getElementById("correctWord")
const miniBoard = Array.from(document.getElementById("miniboard").querySelectorAll("div"))
const clock = Array.from(document.getElementById("timer").querySelectorAll("h5"))
const miniClock = Array.from(document.getElementById("miniTimer").querySelectorAll("p"))
const totalScore = document.getElementById("totalScore")
const miniPoints = Array.from(document.getElementById("miniPoints").querySelectorAll("p"))
const leaderboard = document.getElementById("leaderboard")
const leaderboardButton = document.getElementById("leaderboardButton")
const settings = document.getElementById("settings")
const settingsButton = document.getElementById("settingsButton")
const leaderBoardScores = Array.from(document.querySelectorAll(".score"))
const leaderBoardNames = Array.from(document.querySelectorAll(".name"))
const leaderBoardRanks = Array.from(document.querySelectorAll(".rank"))
const leaderBoardTimes = Array.from(document.querySelectorAll(".time"))
const nameEntry = Array.from(document.getElementById("nameEntry").querySelectorAll("div"))
const timerButton = document.getElementById("timerButton")
const lightmodeButton = document.getElementById("lightmodeButton")
const lightmodeEntry = document.getElementById("lightmodeEntry").querySelector("p")
const timerEntry = document.getElementById("timerEntry").querySelector("p")
const timerEntryLabel = document.getElementById("timerEntryLabel")
const miniNumbers = Array.from(document.getElementById("miniNumbers").querySelectorAll("p"))
const leaderboardImage = document.getElementById("leaderboardButton").querySelector("img")
const settingsImage = document.getElementById("settingsButton").querySelector("img")
const menuImage = document.getElementById("slideInButton").querySelector("img")
const backspaceImage = document.getElementById("backspace").querySelector("img")
const historyButton = document.getElementById("historyButton")
const historyLog = document.getElementById("historyLog")
const historyPoints = Array.from(document.getElementById("slideInMenu").querySelectorAll("h5")) 

const rankings = document.getElementById("rankings")

const patchNotes = document.getElementById("patchNotes")

// leaderboard swap buttons
const localLeaderButton = document.getElementById("local")
const globalLeaderButton = document.getElementById("global")

//global leaderboard data store
let gboardScores = ["99999", "00000", "00000", "00000", "00000",]
let gboardNames = ["Huy", "- - - - -", "- - - - -", "- - - - -", "- - - - -",]
let gboardTimes = ["5.00", "-:--", "-:--", "-:--", "-:--",]

// local leaderboard data store
let lboardScores = ["00000", "00000", "00000", "00000", "00000",]
let lboardNames = ["- - - - -", "- - - - -", "- - - - -", "- - - - -", "- - - - -",]
let lboardTimes = ["0:00", "-:--", "-:--", "-:--", "-:--",]

// keboard buttons status tracker
let keyboard = {
    // 0 means no color, 1 means grey, 2 means yellow, 3 means green
    "A": [document.getElementById("A"), false, 0],
    "B": [document.getElementById("B"), false, 0],
    "C": [document.getElementById("C"), false, 0],
    "D": [document.getElementById("D"), false, 0],
    "E": [document.getElementById("E"), false, 0],
    "F": [document.getElementById("F"), false, 0],
    "G": [document.getElementById("G"), false, 0],
    "H": [document.getElementById("H"), false, 0],
    "I": [document.getElementById("I"), false, 0],
    "J": [document.getElementById("J"), false, 0],
    "K": [document.getElementById("K"), false, 0],
    "L": [document.getElementById("L"), false, 0],
    "M": [document.getElementById("M"), false, 0],
    "N": [document.getElementById("N"), false, 0],
    "O": [document.getElementById("O"), false, 0],
    "P": [document.getElementById("P"), false, 0],
    "Q": [document.getElementById("Q"), false, 0],
    "R": [document.getElementById("R"), false, 0],
    "S": [document.getElementById("S"), false, 0],
    "T": [document.getElementById("T"), false, 0],
    "U": [document.getElementById("U"), false, 0],
    "V": [document.getElementById("V"), false, 0],
    "W": [document.getElementById("W"), false, 0],
    "X": [document.getElementById("X"), false, 0],
    "Y": [document.getElementById("Y"), false, 0],
    "Z": [document.getElementById("Z"), false, 0],



}

//Initialize global variables
let globalClock = setInterval(incrementTimer, 10)
let target = words[Math.floor(Math.random() * words.length)].toUpperCase()
let boardIndex = 0
let colIndex = 0
let curGuess = ""
let curTiles = []
let gameOver = false
let rowIndex = 0
let globalTime = 0
let leaderIndex = 0
correctWord.innerHTML = "Correct Word:  " + target
background.style.visibility = "hidden"
gameOverScreen.style.visibility = "hidden"
slideInMenu.style.visibility = "hidden"
leaderboard.style.visibility = "hidden"
settings.style.visibility = "hidden"
historyLog.style.visibility = "hidden"
let buffer = false
let localBoardMode = true
let menuOpen = false
let score = 0
let roundScore = 0
let prevTime = 0
let nameIndex = 0
let enteredName = ""
let nameEntered = false
let raceMode = true
let lightMode = true
// 0 means deactivated button, 1 means activated button, 2 means grey button, 3 means yellow button, 4 means green button
let tileStates = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

// Initialize color set

//light
let baseColor = 'white'
let textColor = 'black'
let borderColor = '#d4d6da'
let buttonColor = '#d4d6da'
let disableColor = "#88898c"
let green = "#6aaa64"
let yellow = "#c9b458"

let settingsSwap = "images/wordleSettingsLight.png"
let leaderboardSwap = "images/wordleLeaderboardLight.png"
let menuSwap = "images/wordleMenuLight.png"
let backspaceSwap = "images/wordleBackspaceLight.png"

console.log(target)
// randomly choose a light theme
//if (Math.random() > 0.5) {
//    changeColor()
//}
//When a key is pressed...
//_________________________________________________________________________________________//
document.addEventListener('keydown', (event)=> {  
    //if the key is valid and the game is going on...
    if (((/[a-zA-Z]/).test(event.key) || event.key == 'Enter' || event.key == 'Backspace') && gameOver == false) {
        // if we are in bounds and the key was a backspace...
        if (boardIndex <= tiles.length) {
            if (event.key == "Backspace" && boardIndex > 0 && colIndex >= 1 && curTiles.length > 0) {
                // delete the current letter.       
                deleteLetter()
            }
            // If the key was a letter...
            if (event.key.length === 1 && colIndex < 5) {
                // type the letter.

                typeLetter(event.key)
            
            }
            // If the key was enter...
            if (event.key == "Enter" && colIndex == 5) {
                // submit the guess for grading.
                gradeGuess()
            }
        }
    }
    else if (((/[a-zA-Z]/).test(event.key) || event.key == 'Enter' || event.key == 'Backspace') && gameOver == true && nameEntered == false && raceMode == true) {

        if (event.key == "Backspace" && nameIndex > 0) {
            // delete the current letter.       
            nameEntry[nameIndex - 1].innerHTML = ""
            unblink(nameEntry[nameIndex - 1])
            nameIndex -=1
            enteredName = enteredName.slice(0, -1)
            
        }
        // If the key was a letter...
        if (event.key.length === 1 && nameIndex < 5) {
            // type the letter.
            
            nameEntry[nameIndex].innerHTML = event.key.toUpperCase()
            blink(nameEntry[nameIndex])
            nameIndex += 1
            enteredName = enteredName + event.key.toUpperCase()
            
        
        }
        // If the key was enter...
        if (event.key == "Enter") {
            for (let i = 0; i < nameIndex; i++){
                nameEntry[i].style.backgroundColor = buttonColor
                nameEntry[i].style.border = "2px solid" + buttonColor
                nameEntry[i].style.color = textColor
                
            }
            nameEntered = true
            for (let i = 0; i < 5; i++) {
                if (lboardScores[i] < score) {
                    if (leaderIndex < 5) {
                        leaderIndex += 1
                    }


                    // store current indexs score
                    let LBBacklog = [lboardNames[i], lboardScores[i], lboardTimes[i]]


                    if (localBoardMode) {
                        // put new score at curent score 
                        leaderBoardScores[i].innerHTML = score
                        leaderBoardNames[i].innerHTML = enteredName
                        leaderBoardTimes[i].innerHTML = (((globalTime)/ 1000) - 0.01).toFixed(2)
                        
                        // color all the leaderboard elements at that rank
                        colorOrDisable(true, i)
                    }

                    // store local board data
                    lboardScores[i] = score
                    lboardNames[i] = enteredName
                    lboardTimes[i] = (((globalTime)/ 1000) - 0.01).toFixed(2)
                

            // Move current scores down one slot
                    // while i < leaderIndex:
                    while (i < leaderIndex - 1) {
                        // move index
                        i += 1
                        // store current index
                        let temp = [lboardNames[i], lboardScores[i], lboardTimes[i]]

                         // put stored score at curent index
                         if (localBoardMode) {
                            leaderBoardNames[i].innerHTML = LBBacklog[0]
                            leaderBoardScores[i].innerHTML = LBBacklog[1]
                            leaderBoardTimes[i].innerHTML = LBBacklog[2]
                            // color all the leaderboard elements at that rank
                            colorOrDisable(true, i)
                         }
                        

                        // store local board data
                        lboardScores[i] = LBBacklog[1]
                        lboardNames[i] = LBBacklog[0]
                        lboardTimes[i] = LBBacklog[2]

                        //udate backlog
                        LBBacklog = temp
                                                
                    }
                   
                    // stop updating leaderboard
                    break
                }
            }
        }
    }
});

// Function grades the users guessed word.
//_______________________________________________________________________________________//

function compareGuess(guess, arrayOfTiles) {
    

}

// Create an eventlistener for each button which applys its corresponding action to the baord.
//__________________________________________________________________________________//
keyboardButtons.forEach(button => {
    button.addEventListener('click', buttonClick);
  });

function buttonClick(event) {
    const clickedButton = event.target
    // If we are in bounds...
    if (boardIndex <= tiles.length) {
        if (clickedButton.innerHTML == "" && boardIndex > 0 && colIndex >= 1 && curTiles.length > 0) {
            // delete the current letter.       
            deleteLetter()
        }
        // If the key was a letter...
        if (clickedButton.innerHTML.length === 1 && colIndex < 5) {
            // type the letter.
            typeLetter(clickedButton.innerHTML)
        
        }
        // If the key was enter...
        if (clickedButton.innerHTML == "ENTER" && colIndex == 5) {
            // submit the guess for grading.
            gradeGuess()
        }
    }

}


// Types a letter on the board
//_____________________________________________________________________//

function typeLetter(letter) {
    blink(tiles[boardIndex])
    tileStates[boardIndex] = 1
    tiles[boardIndex].innerHTML = letter.toUpperCase()
    curTiles.push(tiles[boardIndex])
    boardIndex++
    colIndex++
    

    curGuess = curGuess + letter
}
// Backspaces a letter on the board
//_____________________________________________________________________//
function deleteLetter() {
    unblink(tiles[boardIndex - 1])
    tiles[boardIndex - 1].innerHTML = "";
    curGuess = curGuess.slice(0, -1)
    boardIndex--
    colIndex--
    tileStates[boardIndex] = 0
    
    curTiles.pop()
}
// Enters a guess for grading
//________________________________________________________//

//compareGuess(curGuess, curTiles)
// guess - curGuess, arrayOfTiles = curTiles

async function gradeGuess() {

    

    // if the guess is a word
    if (words.includes(curGuess.toLowerCase())) {
        // update clocks
        colIndex = 0
        if (raceMode) {
            miniClock[rowIndex].innerHTML = (((globalTime)/ 1000) - 0.01).toFixed(2) 
            miniClock[rowIndex].style.color = textColor
        }

        

        // Initialize variables to deal with duplicate letter edge-cases.
        prevTime = globalTime - prevTime 
        roundScore = Math.max(0, (10000 - ((prevTime * 3))/10).toFixed(0))
        let duplicateDetecter = target;
        // If the guess is correct end the game
        if (curGuess.toUpperCase() === target) {
            curTiles.forEach((element) => {
                element.style.backgroundColor = green;
                element.style.border = "2px " + green +  " solid";

            });
            for (let i = boardIndex - 1; i > boardIndex - 6; i--) {
                miniBoard[i].style.backgroundColor = green
            
            }
            for(let i = rowIndex * 5; i < (rowIndex * 5) + 5; i++) {
                tileStates[i] = 4
            }
            roundScore += 20000
            endGame("YOU WON");
        }   
        // If the guess is incorrect store the neccesary colors for the buttons
        else {

            // Iterate throgh each tile.
            curTiles.forEach((currentTile, i) => {
                // If the letter is in the right spot...
                if (currentTile.innerHTML == target[i]) {
                    // update the tile color to green.             
                    tileStates[(rowIndex * 5) + i] = 4
                    // Update grade tracking.
                    const temp = duplicateDetecter.split('');
                    temp[i] = '0';
                    duplicateDetecter = temp.join('');
                    // Color corresponding minitile
                    miniBoard[5 * rowIndex + i].style.backgroundColor = green
                
                    
                }

            });
            // Iterate throgh each tile again.
            curTiles.forEach((currentTile, i) => {
                // If the letter is in the target and has not yet been turned green... 
                if (duplicateDetecter.includes(currentTile.innerHTML) && tileStates[(rowIndex * 5) + i] != 4) {
                    // Update the tile color to yellow
                    tileStates[(rowIndex* 5) + i] = 3
                    // Update grade tracking
                    duplicateDetecter = duplicateDetecter.replace(currentTile.innerHTML, "0", 1);
                    // Color the corresponding minitile
                    miniBoard[5 * rowIndex + i].style.backgroundColor = yellow;
                

                }
                // If the tile has not been colored yet...
                else if (tileStates[(rowIndex * 5) + i] != 4){
                    // Color it grey.
                    tileStates[(rowIndex* 5) + i] = 2
                        
                }
                
            });
        }

        if (raceMode) {
            miniPoints[rowIndex].innerHTML = "+" + roundScore

        }
                    
        // apply the colors and the animation
        for (let i = boardIndex - 1; i > boardIndex - 6; i--) {
            if (lightMode){
                tiles[i].style.color = "white"
            }
            if (lightMode) {
                keyboard[tiles[i].innerHTML][0].style.color = 'white';
            }
            tiles[i].style.transform = 'scale(1.05)'
            if (tileStates[i] == 2){
                //color the tile and button grey
                tiles[i].style.backgroundColor = disableColor;
                tiles[i].style.border = "2px " + disableColor + " solid";
                // Color its corresponding button
                if (keyboard[tiles[i].innerHTML][1] == false) {
                    keyboard[tiles[i].innerHTML][0].style.backgroundColor = disableColor;
                    keyboard[tiles[i].innerHTML][2] = 1
                }

            }
            else if (tileStates[i] == 3) {
                // color the tile yellow
                tiles[i].style.backgroundColor = yellow;
                tiles[i].style.border = "2px " + yellow +  " solid";
                // Color the corresponding button
                if (keyboard[tiles[i].innerHTML][1] == false) {
                    keyboard[tiles[i].innerHTML][0].style.backgroundColor = yellow;
                    keyboard[tiles[i].innerHTML][2] = 2
                    keyboard[tiles[i].innerHTML][1] = true
                }
            }
            else if (tileStates[i] == 4) {
                // color the tile and button green
                tiles[i].style.backgroundColor = green;
                tiles[i].style.border = "2px " + green +  " solid";
                // Color the corresponding button
                keyboard[tiles[i].innerHTML][0].style.backgroundColor = green;
                keyboard[tiles[i].innerHTML][2] = 3
                keyboard[tiles[i].innerHTML][1] = true
            }
            await Delay(50)
            tiles[i].style.transform = 'scale(1.0)'
        }
    
        score += roundScore
        rowIndex += 1
        curGuess = ""
        curTiles = []
        
        
        // if the guess is wrong and were out of guesses, end the game
        if (boardIndex == tiles.length && !gameOver){
            score = 0
            endGame("YOU LOST")
        } 

    // If word not in wor list play some shake animation
    } else {
        for (let i = 1; i < 6; i++) {
            tiles[boardIndex - i].style.transform = 'scale(0.9)'
        }
        await Delay(50)
        for (let i = 1; i < 6; i++) {
            tiles[boardIndex - i].style.transform = 'scale(1.0)'
        }
        await Delay(100)
        for (let i = 1; i < 6; i++) {
            tiles[boardIndex - i].style.transform = 'scale(0.9)'
        }
        await Delay(50)
        for (let i = 1; i < 6; i++) {
            tiles[boardIndex - i].style.transform = 'scale(1.0)'
        }
    }

}
// Activates game over screen and updates leaderboard.
//_________________________________________________________________________________________________//
async function endGame(message) {
    clearInterval(globalClock)
    gameOver = true
    buffer = true
    await Delay(1000)
    buffer = false
    for (let i = rowIndex; i < 6; i++) {
        score += 10000
    }
    totalScore.innerHTML = 'Total Score: ' + score
    finalMessage.innerHTML = message
    gameOverScreen.style.visibility = 'visible'
    background.style.visibility = 'visible'
    replayButton.style.visibility = 'visible'
    if (raceMode) {
        timerEntryLabel.style.visibility = "visible"
        totalScore.style.visibility = "visible"
        nameEntry.forEach((element) => {
            element.style.visibility = "visible"
    
        })
    }
    else {
        timerEntryLabel.style.visibility = "hidden"
        totalScore.style.visibility = "hidden"
        nameEntry.forEach((element) => {
            element.style.visibility = "hidden"
    
        })
    }

}
// Blinks a tile.
//_________________________________________________________________________________________________//
async function blink(currentTile){
    if (lightMode) {
        currentTile.style.border = "2px " + disableColor + " solid"
    }
    else {
        currentTile.style.border = "2px " + buttonColor + " solid"

    }

    // blink
    currentTile.style.transform = 'scale(0.95)'
    await Delay(50)
    currentTile.style.transform = "scale(1.05)"
    await Delay(50)
    currentTile.style.transform = "scale(1.0)"


}
// Unblinks a tile.
//_________________________________________________________________________________________________//
async function unblink(currentTile) {
    currentTile.style.border = "2px " + borderColor + " solid"

    currentTile.style.transform = 'scale(1..05)'
    await Delay(50)
    currentTile.style.transform = "scale(0.95)"
    await Delay(50)
    currentTile.style.transform = "scale(1.0)"
    
}

// Exits winscreen.
//_________________________________________________________________________________________________//
exitButton.addEventListener("click", (event)=> {  
    gameOverScreen.style.visibility = 'hidden'
    background.style.visibility = 'hidden'
    replayButton.style.visibility = 'visible'
    timerEntryLabel.style.visibility = "hidden"
    totalScore.style.visibility = "hidden"
    nameEntry.forEach((element) => {
        element.style.visibility = "hidden"
    
    })

})

// Opens Settings.
//______________________________________________________________________________________________________//
settingsButton.addEventListener("click", (event) =>{

    leaderboard.style.visibility = 'hidden'
    if (settings.style.visibility == 'visible') {
        settings.style.visibility = 'hidden'
    }
    else {
        settings.style.visibility = 'visible'
    }


})
// Opens Leaderboard.
//___________________________________________________________________________________________________________//
leaderboardButton.addEventListener("click", (event) => {
    settings.style.visibility = 'hidden'

    if (leaderboard.style.visibility == 'visible') {
        leaderboard.style.visibility = 'hidden'
    }
    else {
        leaderboard.style.visibility = 'visible'
    }
   

})
// Opens version history log
historyButton.addEventListener("click", (event) => {
    if (historyButton.innerHTML == 'View History') {
        historyButton.innerHTML = 'Hide History'
        historyLog.style.visibility = 'visible'
        historyLog.style.height = 'fit-content'
        patchNotes.style.height = "400px"
        patchNotes.style.overflow = "scroll"

        

    }
    else {
        historyButton.innerHTML = 'View History'
        historyLog.style.visibility = 'hidden'
        historyLog.style.height = '0px'
        patchNotes.style.height = "300px"
        patchNotes.style.overflow = "visible"
        


    }
    
    
}
)

// Enables/disables timer 
//________________________________________________________________________________________________________//
timerButton.addEventListener("click", (event) => {
    
    if (raceMode) {
        timerButton.innerHTML = ""
        timerEntry.style.color = disableColor
        
        raceMode = false
        initialize()
        clearInterval(globalClock)
    }
    else {
        raceMode = true
    
        timerButton.innerHTML = "X"
        timerEntry.style.color = textColor
        initialize()

    }
})

//color/disable leaderboard rank
function colorOrDisable(color, i) {
    if (color) {
        leaderBoardNames[i].style.color = textColor
        leaderBoardScores[i].style.color = textColor
        leaderBoardTimes[i].style.color = textColor
        leaderBoardRanks[i].style.color = textColor
    }
    else {
        leaderBoardNames[i].style.color = disableColor
        leaderBoardScores[i].style.color = disableColor
        leaderBoardTimes[i].style.color = disableColor
        leaderBoardRanks[i].style.color = disableColor
    }
    
}

                        
// Switch between leaderboard modes 
//___________________________________________________________________________________________________________//
localLeaderButton.addEventListener("click", function(){
    switchLeaderboardMode(localLeaderButton, globalLeaderButton, lboardNames, lboardScores, lboardTimes)
});
globalLeaderButton.addEventListener("click", function(){
    switchLeaderboardMode(globalLeaderButton, localLeaderButton, gboardNames, gboardScores, gboardTimes)
});

function switchLeaderboardMode(onButton, offButton, namesArray, scoresArray, timesArray) {
    //update local board mode 
    if (onButton == localLeaderButton) {
        localBoardMode = true
    }
    else {
        localBoardMode = false
    }
    
    // make active tab bigger
    onButton.style.transform = "scale(1.1)"
    onButton.style.zIndex  = "1"

    offButton.style.transform = "scale(1.0)"
    offButton.style.zIndex  = "0"
    //swictch active tab
    onButton.style.borderBottom = "2px solid " + baseColor
    offButton.style.borderBottom = "2px solid " + disableColor
    offButton.style.backgroundColor = borderColor
    onButton.style.backgroundColor = baseColor

    //update tabs data
    i = 0
    while (namesArray[i] != "- - - - -") {
        //enter data
        leaderBoardNames[i].innerHTML = namesArray[i]
        leaderBoardScores[i].innerHTML = scoresArray[i]
        leaderBoardTimes[i].innerHTML = timesArray[i]
        //color and increment
        colorOrDisable(true, i)
        i++
    }
    //disable unsused ranks
    while (i < 5) {
        //clear data
        leaderBoardNames[i].innerHTML = "- - - - -"
        leaderBoardScores[i].innerHTML = "00000"
        leaderBoardTimes[i].innerHTML = "0:00"
        // color and increment
        colorOrDisable(false, i)
        i++
    }


}


// Enables/disables dark mode
//___________________________________________________________________________________________________________//
lightmodeButton.addEventListener("click", (changeColor));

function changeColor() {

    if (lightMode) {
        //dark
        baseColor = "#121213";
        textColor = 'white'
        borderColor = "#414242"
        buttonColor = "#818384"
        disableColor = "#414242"
        green = "#588c4c"
        yellow = "#b89c3c"
        lightmodeEntry.style.color = disableColor
        lightmodeButton.innerHTML = ""
        settingsSwap = "images/WordleSettings.png"
        leaderboardSwap = "images/WordleLeaderboard.png"
        menuSwap = "images/wordleHamburger.png"
        backspaceSwap = "images/wordleBackspace.png"
        lightmodeEntry.innerHTML = "Dark Mode"
        lightMode = false
        slideInMenu.style.boxShadow = "5px 5px 5px rgba(0,0,0,.85)"
        
        
    }
    else {
        //light
        lightMode = true
        baseColor = 'white';
        textColor = 'black'
        borderColor = '#d4d6da'
        buttonColor = '#d4d6da'
        disableColor = "#818384"
        green = "#6aaa64"
        yellow = "#c9b458"
        lightmodeEntry.style.color = textColor
        lightmodeButton.innerHTML = "X"
        settingsSwap = "images/wordleSettingsLight.png"
        leaderboardSwap = "images/wordleLeaderboardLight.png"
        menuSwap = "images/wordleMenuLight.png"
        backspaceSwap = "images/wordleBackspaceLight.png"
        lightmodeEntry.innerHTML = "Light Mode"
        slideInMenu.style.boxShadow = "5px 5px 5px rgba(0,0,0,.15)"
    }

    window.universal.style.backgroundColor = baseColor
    window.universal.style.color = textColor
    slideInMenu.style.backgroundColor = baseColor
    background.style.backgroundColor = baseColor

    
    for (let i = 0; i < historyPoints.length; i++) {
        historyPoints[i].style.color = textColor
    }

    for (let i = 0; i < 30; i++){
        tiles[i].style.color = textColor
        if (tileStates[i] == 0) {
            
            tiles[i].style.backgroundColor = baseColor;
            tiles[i].style.border = "2px " + borderColor + " solid";
        }
        else if (tileStates[i] == 1) {
            tiles[i].style.backgroundColor = baseColor;
            if (lightMode) {
                tiles[i].style.border = "2px " + disableColor + " solid";
            }
            else {
            tiles[i].style.border = "2px " + buttonColor + " solid";
            }
        }
        else if (tileStates[i] == 2) {
            tiles[i].style.backgroundColor = disableColor;
            tiles[i].style.border = "2px " + disableColor + " solid";
            if (lightMode) {
                tiles[i].style.color = 'white'
            }

        } else if (tileStates[i] == 3) {
            tiles[i].style.backgroundColor = yellow;
            tiles[i].style.border = "2px " + yellow + " solid";
            if (lightMode) {
                tiles[i].style.color = 'white'
            }
        }
        else if (tileStates[i] == 4){
            tiles[i].style.backgroundColor = green;
            tiles[i].style.border = "2px " + green + " solid";
            if (lightMode) {
                tiles[i].style.color = 'white'
            }
        }

    }
    keyboardButtons.forEach((element) => {
        element.style.backgroundColor = buttonColor;
        element.style.color = textColor;
        if (element.innerHTML.length == 1 ) {

            if (keyboard[element.innerHTML][2] == 1) {
                keyboard[element.innerHTML][0].style.backgroundColor = disableColor
            }
            else if (keyboard[element.innerHTML][2] == 2) {
                keyboard[element.innerHTML][0].style.backgroundColor = yellow

            }
            else if (keyboard[element.innerHTML][2] == 3) {
                keyboard[element.innerHTML][0].style.backgroundColor = green

            }

            if (lightMode && keyboard[element.innerHTML][2] != 0) {
                keyboard[element.innerHTML][0].style.color = 'white'
            }
    }
        
    
    })

    localLeaderButton.style.borderTop = "2px solid " + disableColor;
    localLeaderButton.style.borderLeft = "2px solid " + disableColor;
    localLeaderButton.style.borderRight = "2px solid " + disableColor;


    globalLeaderButton.style.borderTop = "2px solid " + disableColor;
    globalLeaderButton.style.borderLeft = "2px solid " + disableColor;
    globalLeaderButton.style.borderRight = "2px solid " + disableColor;

    rankings.style.borderTop = "2px solid " + disableColor

    if (localBoardMode) {
        switchLeaderboardMode(localLeaderButton, globalLeaderButton, lboardNames, lboardScores, lboardTimes)
    }
    else {
        switchLeaderboardMode(globalLeaderButton, localLeaderButton, gboardNames, gboardScores, gboardTimes)
    }
   
    localLeaderButton.style.color = textColor;
    globalLeaderButton.style.color = textColor;

    if (localBoardMode) {

    }


    replayButton.style.backgroundColor = buttonColor;
    leaderboard.style.backgroundColor = baseColor;
    settings.style.backgroundColor = baseColor;
    timerButton.style.color = textColor;

    for (let i = 0; i < rowIndex; i ++) {
        clock[i].style.color = textColor
    }
    
    if (raceMode) {
        timerEntry.style.color = textColor;
        
    }
    else {
        timerEntry.style.color = disableColor;
    }
    updateLeaderboardElements(leaderBoardNames)
    updateLeaderboardElements(leaderBoardRanks)
    updateLeaderboardElements(leaderBoardScores)
    updateLeaderboardElements(leaderBoardTimes)
    gameOverScreen.style.backgroundColor = baseColor

    for (let i = rowIndex + 1; i < 6; i++) {
        clock[i].style.color = disableColor
        miniClock[i].style.backgroundColor = baseColor

    }
    i = 0
    while (i <= rowIndex) {
        miniClock[i].style.color = textColor
        miniClock[i].style.backgroundColor = baseColor
        i += 1
    }

    while (i <= 5) {
        miniClock[i].style.color = disableColor
        miniClock[i].style.backgroundColor = baseColor

        i += 1
    }

    miniPoints.forEach((element) => {
        element.style.color = textColor
        element.style.backgroundColor = baseColor
    })

    miniNumbers.forEach((element) => {
        element.style.backgroundColor = baseColor
    })

    finalMessage.style.backgroundColor = baseColor
    finalMessage.style.color = textColor
    exitButton.style.backgroundColor = baseColor
    exitButton.style.color = textColor

    nameEntry.forEach((element) => {
        element.style.backgroundColor = baseColor;
        element.style.border = "2px " + borderColor  + " solid";
        element.style.color = textColor


    })

    //updates miniboard
    for (let i = 0; i < 30; i++) {
        miniBoard[i].style.backgroundColor = borderColor;
        if (tileStates[i] == 0 || tileStates[i] == 1 || tileStates[i] == 2) {
            miniBoard[i].style.backgroundColor = buttonColor;
        }

        else if (tileStates[i] == 3) {
            miniBoard[i].style.backgroundColor = yellow;

        }
        else {
            miniBoard[i].style.backgroundColor = green;

        }

    }
    
    leaderboardImage.src = leaderboardSwap
    menuImage.src = menuSwap
    backspaceImage.src = backspaceSwap
    settingsImage.src = settingsSwap
}

// Delay function
function Delay(duration) {
    return new Promise(resolve => {
        setTimeout(resolve, duration)
    })
}

// Timer function
function incrementTimer() {
    clock[rowIndex].innerHTML = (globalTime / 1000).toFixed(2)
    globalTime += 10
    for (let i = 0; i < rowIndex + 1; i ++) {
        clock[i].style.color = textColor
    }

}



// Changes leaderboard element
function updateLeaderboardElements(elements) {
    for(let i = 0; i < leaderIndex; i++) {
        elements[i].style.color = textColor
    }
}

// Resets game.
//_________________________________________________________________________________________________//
function initialize() {

    clearInterval(globalClock)
    if (raceMode) {
        globalClock = setInterval(incrementTimer, 10)
    }
    keyboard = {
        "A": [document.getElementById("A"), false, 0],
        "B": [document.getElementById("B"), false, 0],
        "C": [document.getElementById("C"), false, 0],
        "D": [document.getElementById("D"), false, 0],
        "E": [document.getElementById("E"), false, 0],
        "F": [document.getElementById("F"), false, 0],
        "G": [document.getElementById("G"), false, 0],
        "H": [document.getElementById("H"), false, 0],
        "I": [document.getElementById("I"), false, 0],
        "J": [document.getElementById("J"), false, 0],
        "K": [document.getElementById("K"), false, 0],
        "L": [document.getElementById("L"), false, 0],
        "M": [document.getElementById("M"), false, 0],
        "N": [document.getElementById("N"), false, 0],
        "O": [document.getElementById("O"), false, 0],
        "P": [document.getElementById("P"), false, 0],
        "Q": [document.getElementById("Q"), false, 0],
        "R": [document.getElementById("R"), false, 0],
        "S": [document.getElementById("S"), false, 0],
        "T": [document.getElementById("T"), false, 0],
        "U": [document.getElementById("U"), false, 0],
        "V": [document.getElementById("V"), false, 0],
        "W": [document.getElementById("W"), false, 0],
        "X": [document.getElementById("X"), false, 0],
        "Y": [document.getElementById("Y"), false, 0],
        "Z": [document.getElementById("Z"), false, 0],
    }
    
    tileStates = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    target = words[Math.floor(Math.random() * words.length)].toUpperCase()
    console.log(target)
    
    boardIndex = 0
    colIndex = 0
    curGuess = ""
    curTiles = []
    gameOver = false
    menuOpen = false
    rowIndex = 0
    globalTime = 0
    score = 0
    prevTime = 0
    nameIndex = 0
    enteredName = ""
    nameEntered = false


    correctWord.innerHTML = "Correct Word:  " + target
    background.style.visibility = "hidden"
    gameOverScreen.style.visibility = "hidden"

    nameEntry.forEach((element) => {
        element.style.backgroundColor = baseColor;
        element.style.border = "2px" + borderColor  + "solid";
        element.innerHTML = ""

    })
    
    tiles.forEach((element) => {
        element.style.backgroundColor = baseColor;
        element.style.color = textColor;
        element.style.border = "2px " + borderColor + " solid";
        element.innerHTML = ""

      });
    miniBoard.forEach((element) => {
        element.style.backgroundColor = borderColor;
        element.innerHTML = ""

      });
    
    keyboardButtons.forEach((element) => {
        element.style.backgroundColor = buttonColor;
        element.style.color = textColor;
    
    })

    clock.forEach((element) => {
        element.innerHTML = '-:--'
        element.style.color = borderColor
    })
    
    miniClock.forEach((element) => {
        element.innerHTML = "--:--"
        element.style.color = borderColor
    })

    if (raceMode) {
        miniPoints.forEach((element) => {
            element.innerHTML = "+10000"
            element.style.color = textColor
        })
    }
    else {
        miniPoints.forEach((element) => {
            element.innerHTML = "+00000"
            element.style.color = borderColor
        })
    }
}
replayButton.addEventListener("click" , (event)=> {  
    if (!buffer) {
        initialize()
    }
})
slideInButton.addEventListener("click", (event) => {
    if (!menuOpen) {
        slideInMenu.style.visibility = 'visible'
        menuOpen = true
        return
    }
    
    slideInMenu.style.visibility = 'hidden'
    menuOpen = false

})

