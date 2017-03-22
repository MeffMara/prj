// ������������ �������
module.exports = function(grunt) {
    // ��������� ����� 
    grunt.initConfig({ // ��������� ��� JS-����� � ����� � ���� ����
        concat: { main: { src: 'js/**/*.js', dest: 'build/scripts.js' } }
    }); // �������� ��������, ������������� � ������� npm install 
    grunt.loadNpmTasks('grunt-contrib-concat'); // ������ �� ��������� (��� ����������� ������ ����)
    grunt.registerTask('default', ['concat']);
};