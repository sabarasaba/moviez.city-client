export default function(){
  this.transition(
    this.fromRoute('movies.index'),
    this.toRoute('movies.show'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
};
