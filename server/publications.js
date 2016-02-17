Meteor.publish('images', function(limit, userSlug) {
  check(limit, Number);
console.log("userSlug"+userSlug);
  var findQuery = {};
 if (userSlug) {
    check(userSlug, String);
    findQuery = { userSlug : userSlug };
  }

  return Images.find(findQuery, {
    limit: limit,
    sort: { uploadedAt: -1 }
  });
});