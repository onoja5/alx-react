import React from 'react';
import CourseListRow from './CourseListRow';
import './CourseList.css';
import CourseShape from './CourseShape';
import PropType from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

function CourseList() {
    return(
        <table id="CourseList" cellpadding="0" cellspacing="0" className={css(CourseListStyles.table)}>
        <thead>
          <CourseListRow isHeader={true} textFirstCell='Available courses' />
          <CourseListRow isHeader={true} textFirstCell='Course name' textSecondCell="Credit" />
        </thead>
        <tbody>
          <CourseListRow isHeader={false} textFirstCell='ES6' textSecondCell="60" />
          <CourseListRow isHeader={false} textFirstCell='Webpack' textSecondCell="20" />
          <CourseListRow isHeader={false} textFirstCell='React' textSecondCell="40" />
        </tbody>
      </table>
    );
}

const CourseListStyles = StyleSheet.create({
  table: {
    display: 'table',
    border: '1px solid',
    borderCollapse: 'collapse',
    margin: '2rem auto 0 auto',
    width: '90%',
  }
})

CourseList.defaultProps = {
  listCourses: []
};

CourseList.propType = {
  listCouses: PropType.arrayOf(CourseShape)
}

export default CourseList;

