import camelcaseKeys from 'camelcase-keys';
// import { DbObject } from '../@types/database';


interface ObjectToStringResult {
  stringObject: string;
  lastIndex: number;
  values: any[];
}

interface GetConditionStringResult {
  conditionString: string;
  lastIndex: number;
  conditionValues: any[];
}

interface GetSetStringResult {
  setString: string;
  lastIndex: number;
  setValues: any[];
}

interface GetInsertStringResult {
  insertString: string;
  lastIndex: number;
  insertValues: any[];
}

class SqlGenerator {
  camelToSnakeCase(str: string): string {
    return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
  }

  camelcaseKeys(object: any): any {
    return camelcaseKeys(object);
    // return object;
  }

  objectToString(object: any, joinSubstring: string, start: number = 1): ObjectToStringResult {
    const entries = Object.entries(object);
    const filtredEntries = entries.filter(([key, value]) => value !== null && value !== undefined);
    const filtredObject = Object.fromEntries(filtredEntries);

    const keys = Object.keys(filtredObject);
    const values = Object.values(filtredObject);

    const stringObject = keys.map((key, i) => `${this.camelToSnakeCase(key)} = $${i + start}`).join(joinSubstring);
    const lastIndex = start + keys.length;

    return { stringObject, lastIndex, values };
  }

  getConditionString(conditionObject: {} = {}, start: number = 1): GetConditionStringResult {
    let conditionString = '';
    const { stringObject, lastIndex, values } = this.objectToString(conditionObject, ' AND ', start);
    if (stringObject) {
      conditionString = 'WHERE ' + stringObject;
    }

    return { conditionString, lastIndex, conditionValues: values };
  }

  getSetString(object: {}, start: number = 1): GetSetStringResult {
    const { stringObject, lastIndex, values } = this.objectToString(object, ', ', start);

    return { setString: stringObject, lastIndex, setValues: values };
  }

  getInsertString(object: any, start: number = 1): GetInsertStringResult {
    const values = Object.values(object);
    const keys = Object.keys(object).map(key => this.camelToSnakeCase(key));
    const newValues = keys.map((_, i) => `$${i + start}`);

    const insertString = `(${keys.join(', ')}) VALUES (${newValues.join(', ')})`;
    const lastIndex = start + keys.length;

    return { insertString, lastIndex, insertValues: values };
  }
}

const sqlGenerator = new SqlGenerator();

export default sqlGenerator;