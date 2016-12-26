import $ from 'jquery';

export function log(content) {
    $('#content').append('<h4>' + content+'</h4>');
}

export function logTitle(content) {
    $('#content').append('<h1 class="bg-primary text-center">' + content+'</h1>');
}