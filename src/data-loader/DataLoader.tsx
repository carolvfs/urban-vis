import grammarMapJson from '../../public/grammar_map.json'


export abstract class DataLoader {
    
  static read_grammar() {
    const grammarMap = JSON.stringify(grammarMapJson, null, 2)
    return grammarMap
  }
}