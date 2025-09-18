import React, { useContext, useEffect, useState } from 'react'
import DqdExamInfo from './DqdExamInfo'

import { ThemeContext } from './DqdExampleContext';

export default function DqdExamContext() {
    let theme = useContext(ThemeContext);
   
  return (
    <div>
        <p className={theme}>
            Áp dụng:
            <br/>
            <span className={theme}>
                useContext là một React Hook cho phép truy cập dữ liệu từ Context mà không cần phải truyền props qua nhiều cấp (tránh tình trạng props drilling).
            </span>
        </p>
        <DqdExamInfo />
    </div>
  )
}