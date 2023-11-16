import React from 'react';
import type { Emoji } from '../App';


export default function RemoveDuplicates(data: Emoji[]) {
    return data.map((el) => {
        if (el.keywords) {
            let res = el.keywords.split(" ");
            res = [...(new Set(res) as any)];
            el.keywords = res.join(" ");
        }
        return el;
      });
    }
    